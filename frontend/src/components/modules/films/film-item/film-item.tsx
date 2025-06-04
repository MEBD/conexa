"use client";

import styles from "./film-item.module.css";

export interface FilmItemData {
  id: number;
  title: string;
}

interface Props {
  key: string;
  data: FilmItemData;
}

export default function FilmItem(props: Props): React.ReactNode {
  const { data } = props;
  return (
    <div className={styles["film-item"]}>
      <h1>{data.title}</h1>
      <p>{data.id}</p>
    </div>
  );
}
