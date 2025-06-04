import Typography from '@/components/typography/typography';
import { Film } from '@/shared/domain/film.entity';
import { ReactNode } from 'react';
import styles from './film-item.module.css';

interface Props {
  key: string;
  data: Film;
}

export default function FilmItem(props: Props): ReactNode {
  const { data } = props;
  return (
    <div className={styles['film-item']}>
      <Typography variant="h2">{data.title}</Typography>
      <p>{data.id}</p>
    </div>
  );
}
