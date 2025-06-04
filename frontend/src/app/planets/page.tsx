"use client";

import InfiniteScrollWrapper from "@/components/infinite-scroll-wrapper/infinite-scroll-wrapper";
import styles from "./page.module.css";
import PlanetItem from "@/app/planets/components/planet-item/planet-item";
import { Planet } from "@/shared/domain/planet.entity";
import Typography from "@/components/typography/typography";

const renderItem = (uid: string, data: Planet): React.ReactNode => {
  return <PlanetItem key={uid} data={data}></PlanetItem>;
};

export default function PlanetsPage() {
  return (
    <div className={styles.films}>
      <Typography variant="h1">Planets</Typography>
      <InfiniteScrollWrapper
        path="planets"
        renderItem={renderItem}
      ></InfiniteScrollWrapper>
    </div>
  );
}
