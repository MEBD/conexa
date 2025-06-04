'use client';

import PersonItem from '@/app/people/components/person-item/person-item';
import InfiniteScrollWrapper from '@/components/infinite-scroll-wrapper/infinite-scroll-wrapper';
import SectionHeader from '@/components/section-header/section-header';
import Typography from '@/components/typography/typography';
import { Person } from '@/shared/domain/person.entity';
import { ReactNode } from 'react';
import styles from './page.module.css';

const renderItem = (uid: string, data: Person): ReactNode => {
  return <PersonItem key={uid} data={data}></PersonItem>;
};

export default function PeoplePage() {
  return (
    <div className={styles.people}>
      <SectionHeader>
        <Typography variant="h1">People</Typography>
      </SectionHeader>
      <InfiniteScrollWrapper
        path="people"
        renderItem={renderItem}
      ></InfiniteScrollWrapper>
    </div>
  );
}
