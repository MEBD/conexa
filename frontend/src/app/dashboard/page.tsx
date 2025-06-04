import Link from 'next/link';
import styles from './page.module.css';

export default function DashboardPage() {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/films">films</Link>
        </li>
        <li>
          <Link href="/people">people</Link>
        </li>
        <li>
          <Link href="/planets">planets</Link>
        </li>
        <li>
          <Link href="/starships">starships</Link>
        </li>
      </ul>
    </div>
  );
}
