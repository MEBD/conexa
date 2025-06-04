"use client";

import InfiniteScrollWrapper from "@/components/shared/infinite-scroll-wrapper/infinite-scroll-wrapper";
import styles from "./page.module.css";
import PlanetItem, {
  PlanetItemData,
} from "@/components/modules/planets/planet-item/planet-item";

const renderItem = (uid: string, data: PlanetItemData): React.ReactNode => {
  return <PlanetItem key={uid} data={data}></PlanetItem>;
};

export default function PlanetsPage() {
  return (
    <div className={styles.films}>
      <h1>Planets</h1>
      <InfiniteScrollWrapper
        path="planets"
        renderItem={renderItem}
      ></InfiniteScrollWrapper>
    </div>
  );
}
