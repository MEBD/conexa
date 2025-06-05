'use client';

import InfiniteScrollWrapper from '@/shared/components/infinite-scroll-wrapper/infinite-scroll-wrapper';
import { Starship } from '@/shared/domain/starship.entity';
import SectionHeader from '@/shared/ui/section-header/section-header';
import Typography from '@/shared/ui/typography/typography';
import { ReactNode } from 'react';
import StarshipItem from './components/starship-item/starship-item';

const renderItem = (data: Starship): ReactNode => {
  return <StarshipItem data={data}></StarshipItem>;
};

export default function StarshipsPage() {
  return (
    <section>
      <SectionHeader>
        <Typography variant="h1">Starships</Typography>
      </SectionHeader>
      <InfiniteScrollWrapper
        path="starships"
        entity="starships"
        renderItem={renderItem}
      ></InfiniteScrollWrapper>
    </section>
  );
}
