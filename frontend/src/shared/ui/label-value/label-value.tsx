import Typography from '../typography/typography';
import styles from './label-value.module.css';

interface Props {
  label: string;
  value: string | number;
}
export default function LabelValue(props: Props) {
  const { label, value } = props;
  return (
    <div className={styles['label-value']}>
      <Typography variant="caption">{label}:</Typography>
      <div className={styles['label-value-accent']}>
        <Typography variant="caption">{value}</Typography>
      </div>
    </div>
  );
}
