import { ReactNode } from 'react';

import Typography from '@/shared/ui/typography/typography';
import styles from './infinite-scroll-item.module.css';

const itemStyle = styles['infinite-scroll-item'];
const contentStyle = styles['infinite-scroll-item-content'];
const idStyle = styles['infinite-scroll-item-id'];
const titleStyle = styles['infinite-scroll-item-title'];

interface Props {
  children: ReactNode;
  id: number;
  title: string;
}

export default function InfiniteScrollItem(props: Props): ReactNode {
  const { children, id, title } = props;

  return (
    <div className={itemStyle}>
      <div className={contentStyle}>
        <div className={idStyle}>
          <Typography variant="caption">#{id}</Typography>
        </div>
        <div className={titleStyle}>
          <Typography variant="h3">{title}</Typography>
        </div>
        {children}
      </div>
    </div>
  );
}
