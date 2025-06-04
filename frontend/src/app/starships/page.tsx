'use client';

import StarshipItem from '@/app/starships/components/starship-item/starship-item';
import InfiniteScrollWrapper from '@/components/infinite-scroll-wrapper/infinite-scroll-wrapper';
import SectionHeader from '@/components/section-header/section-header';
import Typography from '@/components/typography/typography';
import { Starship } from '@/shared/domain/starship.entity';
import { ReactNode } from 'react';
import styles from './page.module.css';

const renderItem = (uid: string, data: Starship): ReactNode => {
  return <StarshipItem key={uid} data={data}></StarshipItem>;
};

export default function StarshipsPage() {
  return (
    <div className={styles.films}>
      <SectionHeader>
        <Typography variant="h1">Starships</Typography>
      </SectionHeader>
      <InfiniteScrollWrapper
        path="Starships"
        renderItem={renderItem}
      ></InfiniteScrollWrapper>
    </div>
  );
}
