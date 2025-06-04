import { ReactNode } from 'react';
import styles from './section-header.module.css';

export default function SectionHeader({ children }: { children: ReactNode }) {
  return <div className={styles['section-header']}>{children}</div>;
}
