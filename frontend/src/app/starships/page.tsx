'use client';

import InfiniteScrollWrapper from '@/shared/components/infinite-scroll-wrapper/infinite-scroll-wrapper';
import { Starship } from '@/shared/domain/starship.entity';
import SectionHeader from '@/shared/ui/section-header/section-header';
import Typography from '@/shared/ui/typography/typography';
import { ReactNode } from 'react';
import StarshipItem from './components/starship-item/starship-item';
import styles from './page.module.css';

const renderItem = (data: Starship): ReactNode => {
  return <StarshipItem data={data}></StarshipItem>;
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
