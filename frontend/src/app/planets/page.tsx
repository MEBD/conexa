'use client';

import PlanetItem from '@/app/planets/components/planet-item/planet-item';
import InfiniteScrollWrapper from '@/components/infinite-scroll-wrapper/infinite-scroll-wrapper';
import SectionHeader from '@/components/section-header/section-header';
import Typography from '@/components/typography/typography';
import { Planet } from '@/shared/domain/planet.entity';
import { ReactNode } from 'react';
import styles from './page.module.css';

const renderItem = (uid: string, data: Planet): ReactNode => {
  return <PlanetItem key={uid} data={data}></PlanetItem>;
};

export default function PlanetsPage() {
  return (
    <div className={styles.films}>
      <SectionHeader>
        <Typography variant="h1">Planets</Typography>
      </SectionHeader>
      <InfiniteScrollWrapper
        path="planets"
        renderItem={renderItem}
      ></InfiniteScrollWrapper>
    </div>
  );
}
