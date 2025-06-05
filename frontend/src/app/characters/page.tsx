'use client';

import InfiniteScrollWrapper from '@/shared/components/infinite-scroll-wrapper/infinite-scroll-wrapper';
import { Person } from '@/shared/domain/person.entity';
import SectionHeader from '@/shared/ui/section-header/section-header';
import Typography from '@/shared/ui/typography/typography';
import { ReactNode } from 'react';
import CharacterItem from './components/person-item/character-item';
import styles from './page.module.css';

const renderItem = (data: Person): ReactNode => {
  return <CharacterItem data={data}></CharacterItem>;
};

export default function CharactersPage() {
  return (
    <div className={styles.people}>
      <SectionHeader>
        <Typography variant="h1">Characters</Typography>
      </SectionHeader>
      <InfiniteScrollWrapper
        path="people"
        renderItem={renderItem}
      ></InfiniteScrollWrapper>
    </div>
  );
}
