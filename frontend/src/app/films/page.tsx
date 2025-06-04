"use client";

import InfiniteScrollWrapper from "@/components/shared/infinite-scroll-wrapper/infinite-scroll-wrapper";
import styles from "./page.module.css";
import FilmItem, {
  FilmItemData,
} from "@/components/modules/films/film-item/film-item";

const renderItem = (uid: string, data: FilmItemData): React.ReactNode => {
  return <FilmItem key={uid} data={data}></FilmItem>;
};

export default function FilmsPage() {
  return (
    <div className={styles.films}>
      <h1>Films</h1>
      <InfiniteScrollWrapper
        path="films"
        renderItem={renderItem}
      ></InfiniteScrollWrapper>
    </div>
  );
}
