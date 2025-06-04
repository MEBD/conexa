import { Film } from "@/shared/domain/film.entity";
import styles from "./film-item.module.css";
import Typography from "@/components/typography/typography";

interface Props {
  key: string;
  data: Film;
}

export default function FilmItem(props: Props): React.ReactNode {
  const { data } = props;
  return (
    <div className={styles["film-item"]}>
      <Typography variant="h2">{data.title}</Typography>
      <p>{data.id}</p>
    </div>
  );
}
