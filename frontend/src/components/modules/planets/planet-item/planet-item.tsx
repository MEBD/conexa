"use client";

import styles from "./planet-item.module.css";

export interface PlanetItemData {
  id: number;
  name: string;
}

interface Props {
  key: string;
  data: PlanetItemData;
}

export default function PlanetItem(props: Props): React.ReactNode {
  const { data } = props;
  return (
    <div className={styles["planet-item"]}>
      <h1>{data.name}</h1>
      <p>{data.id}</p>
    </div>
  );
}
