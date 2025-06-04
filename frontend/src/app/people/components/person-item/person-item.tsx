import Typography from "@/components/typography/typography";
import styles from "./person-item.module.css";
import { Person } from "@/shared/domain/person.entity";

interface Props {
  key: string;
  data: Person;
}

export default function PersonItem(props: Props): React.ReactNode {
  const { data } = props;
  return (
    <div className={styles["person-item"]}>
      <Typography variant="h2">{data.name}</Typography>
      <p>{data.id}</p>
    </div>
  );
}
