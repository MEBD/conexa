'use client';

import InfiniteScrollWrapper from '@/shared/components/infinite-scroll-wrapper/infinite-scroll-wrapper';
import { Film } from '@/shared/domain/film.entity';
import SectionHeader from '@/shared/ui/section-header/section-header';
import Typography from '@/shared/ui/typography/typography';
import { ReactNode } from 'react';
import FilmItem from './components/film-item/film-item';
import styles from './page.module.css';

const renderItem = (data: Film): ReactNode => {
  return <FilmItem data={data}></FilmItem>;
};

export default function FilmsPage() {
  return (
    <div className={styles['films-page']}>
      <SectionHeader>
        <Typography variant="h1">Films</Typography>
      </SectionHeader>
      <InfiniteScrollWrapper
        path="films"
        renderItem={renderItem}
      ></InfiniteScrollWrapper>
    </div>
  );
}
