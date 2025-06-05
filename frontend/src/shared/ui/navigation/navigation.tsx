'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import Logotype from '../logotype/logotype';
import styles from './navigation.module.css';

interface Props {
  homePath: string;
  links: { label: string; path: string }[];
}

export default function Navigation(props: Props): ReactNode {
  const { homePath, links } = props;
  const currentPath = usePathname();

  const isActive = (path: string): string => {
    return path === currentPath ? styles['navigation-links-active'] : '';
  };

  return (
    <nav className={styles['navigation']}>
      <Link href={homePath}>
        <Logotype />
      </Link>
      <ul className={styles['navigation-links']}>
        {links.map((item, index) => (
          <li
            key={`link-${index}-${item.label}`}
            className={isActive(item.path)}
          >
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
