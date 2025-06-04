"use client";

import InfiniteScrollWrapper from "@/components/infinite-scroll-wrapper/infinite-scroll-wrapper";
import styles from "./page.module.css";
import PersonItem from "@/app/people/components/person-item/person-item";
import { Person } from "@/shared/domain/person.entity";
import Typography from "@/components/typography/typography";

const renderItem = (uid: string, data: Person): React.ReactNode => {
  return <PersonItem key={uid} data={data}></PersonItem>;
};

export default function PeoplePage() {
  return (
    <div className={styles.people}>
      <Typography variant="h1">People</Typography>
      <InfiniteScrollWrapper
        path="people"
        renderItem={renderItem}
      ></InfiniteScrollWrapper>
    </div>
  );
}
