"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { v4 as uuidv4 } from "uuid";

type Item = any;

const getURL = (page: number = 1): string => {
  return `http://localhost:3333/people?page=${page}`;
};

const getKey = (item: any): string => {
  const key = `people-key-${item.id}-${uuidv4()}`;
  return key;
};

export default function PeoplePage() {
  const [nextUrl, setNextUrl] = useState<string | null>(getURL());
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState<Item[]>([]);

  const fetchData = async () => {
    if (!nextUrl) return;

    const response = await fetch(nextUrl);

    const data = await response.json();

    const hasMore = !!data.next;
    const nextURL = getURL(data.next);

    setItems((previousItems) => [...previousItems, ...data.results]);
    setNextUrl(nextURL);
    setHasMore(hasMore);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles["people-page"]}>
      <h1>People</h1>
      <div className={styles["infinite-scroll-container"]}>
        <InfiniteScroll
          className={styles["infinite-scroll"]}
          dataLength={items.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4>Cargando...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>No hay más resultados</p>
          }
        >
          {items.map((item) => (
            <div key={getKey(item)} className={styles["people-item"]}>
              {item.name}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}
