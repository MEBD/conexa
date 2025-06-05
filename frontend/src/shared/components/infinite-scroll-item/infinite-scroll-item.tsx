import Typography from '@/shared/ui/typography/typography';
import { ReactNode } from 'react';
import styles from './infinite-scroll-item.module.css';

interface Props {
  children: ReactNode;
  id: number;
  title: string;
}

export default function InfiniteScrollItem(props: Props): ReactNode {
  const { children, id, title } = props;

  return (
    <div className={styles['infinite-scroll-item']}>
      <div className={styles['infinite-scroll-item-content']}>
        <div className={styles['infinite-scroll-item-id']}>
          <Typography variant="caption">#{id}</Typography>
        </div>
        <div className={styles['infinite-scroll-item-title']}>
          <Typography variant="h3">{title}</Typography>
        </div>
        {children}
      </div>
    </div>
  );
}
