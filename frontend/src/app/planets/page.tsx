'use client';

import InfiniteScrollWrapper from '@/shared/components/infinite-scroll-wrapper/infinite-scroll-wrapper';
import { Planet } from '@/shared/domain/planet.entity';
import SectionHeader from '@/shared/ui/section-header/section-header';
import Typography from '@/shared/ui/typography/typography';
import { ReactNode } from 'react';
import PlanetItem from './components/planet-item/planet-item';

const renderItem = (data: Planet): ReactNode => {
  return <PlanetItem data={data}></PlanetItem>;
};

export default function PlanetsPage() {
  return (
    <section>
      <SectionHeader>
        <Typography variant="h1">Planets</Typography>
      </SectionHeader>
      <InfiniteScrollWrapper
        path="planets"
        entity="planets"
        renderItem={renderItem}
      ></InfiniteScrollWrapper>
    </section>
  );
}
