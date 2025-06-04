"use client";

import InfiniteScrollWrapper from "@/components/infinite-scroll-wrapper/infinite-scroll-wrapper";
import styles from "./page.module.css";
import FilmItem from "@/app/films/components/film-item/film-item";
import { Film } from "@/shared/domain/film.entity";
import Typography from "@/components/typography/typography";

const renderItem = (uid: string, data: Film): React.ReactNode => {
  return <FilmItem key={uid} data={data}></FilmItem>;
};

export default function FilmsPage() {
  return (
    <div className={styles.films}>
      <Typography variant="h1">Films</Typography>
      <InfiniteScrollWrapper
        path="films"
        renderItem={renderItem}
      ></InfiniteScrollWrapper>
    </div>
  );
}
