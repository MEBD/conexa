'use client';

import FilmItem from '@/app/films/components/film-item/film-item';
import InfiniteScrollWrapper from '@/components/infinite-scroll-wrapper/infinite-scroll-wrapper';
import Typography from '@/components/typography/typography';
import { Film } from '@/shared/domain/film.entity';
import { ReactNode } from 'react';
import styles from './page.module.css';

const renderItem = (uid: string, data: Film): ReactNode => {
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
