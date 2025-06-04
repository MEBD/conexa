"use client";

import InfiniteScrollWrapper from "@/components/infinite-scroll-wrapper/infinite-scroll-wrapper";
import styles from "./page.module.css";
import StarshipItem from "@/app/starships/components/starship-item/starship-item";
import { Starship } from "@/shared/domain/starship.entity";
import Typography from "@/components/typography/typography";
import SectionHeader from "@/components/section-header/section-header";

const renderItem = (uid: string, data: Starship): React.ReactNode => {
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
