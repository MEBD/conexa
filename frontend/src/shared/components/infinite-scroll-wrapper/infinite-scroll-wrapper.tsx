'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuidv4 } from 'uuid';
import styles from './infinite-scroll-wrapper.module.css';

// TODO: Move to env
const API_URL = 'http://localhost:3333';

interface Props<T> {
  path: string;
  renderItem: (data: T) => React.ReactNode;
}

const getURL = (path: string, page: number = 1): string => {
  return `${API_URL}/${path}?page=${page}`;
};

export default function InfiniteScrollWrapper<T>(props: Props<T>) {
  const { path, renderItem } = props;
  const [nextUrl, setNextUrl] = useState<string | null>(getURL(path));
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState<T[]>([]);

  const fetchData = async () => {
    if (!nextUrl) return;

    const response = await fetch(nextUrl);
    const data = await response.json();
    const hasMore = !!data.next;
    const url = getURL(path, data.next);

    setItems((previousItems) => [...previousItems, ...data.results]);
    setNextUrl(url);
    setHasMore(hasMore);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles['infinite-scroll-wrapper']}>
      <InfiniteScroll
        className={styles['infinite-scroll']}
        dataLength={items.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Cargando...</h4>}
        endMessage={<h4>No hay más resultados</h4>}
      >
        {items.map((data) => (
          <Link href={`${path}/${(data as any).id}`} key={uuidv4()}>
            {renderItem(data)}
          </Link>
        ))}
      </InfiniteScroll>
    </div>
  );
}
