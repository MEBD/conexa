import Typography from "@/components/typography/typography";
import styles from "./planet-item.module.css";
import { Planet } from "@/shared/domain/planet.entity";

interface Props {
  key: string;
  data: Planet;
}

export default function PlanetItem(props: Props): React.ReactNode {
  const { data } = props;
  return (
    <div className={styles["planet-item"]}>
      <Typography variant="h2">{data.name}</Typography>
      <p>{data.id}</p>
    </div>
  );
}
