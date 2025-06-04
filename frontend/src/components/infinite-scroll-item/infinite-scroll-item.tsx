import { ReactNode } from 'react';

import Typography from '../typography/typography';
import styles from './infinite-scroll-item.module.css';

interface Props {
  children: ReactNode;
  id: number;
  title: string;
}

export default function InfiniteScrollItem(props: Props): ReactNode {
  const { children, id, title } = props;

  const itemStyle = styles['infinite-scroll-item'];
  const contentStyle = styles['infinite-scroll-item-content'];
  const idStyle = styles['infinite-scroll-item-id'];
  const titleStyle = styles['infinite-scroll-item-title'];

  return (
    <div className={itemStyle}>
      <div className={contentStyle}>
        <Typography variant="caption" className={idStyle}>
          #{id}
        </Typography>
        <Typography variant="h3" className={titleStyle}>
          {title}
        </Typography>
        {children}
      </div>
    </div>
  );
}
