import { ReactNode } from 'react';
import styles from './section-content.module.css';

export default function SectionContent({ children }: { children: ReactNode }) {
  return <div className={styles['section-content']}>{children}</div>;
}
