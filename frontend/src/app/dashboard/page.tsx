import SectionHeader from '@/shared/ui/section-header/section-header';
import Typography from '@/shared/ui/typography/typography';
import Link from 'next/link';

import styles from './page.module.css';

import CharactersSVG from '../../../../frontend/public/images/characters.svg';
import FilmsSVG from '../../../../frontend/public/images/films.svg';
import PlanetsSVG from '../../../../frontend/public/images/planets.svg';
import StarshipsSVG from '../../../../frontend/public/images/starships.svg';

export default function DashboardPage() {
  return (
    <div className={styles['dashboard-section']}>
      <SectionHeader>
        <Typography variant="h1">Welcome!</Typography>
      </SectionHeader>
      <div className={styles['dashboard']}>
        <Link href="/films" className={styles['dashboard-item']}>
          <div className={styles['dashboard-item-content']}>
            <FilmsSVG className={styles['dashboard-item-icon']} />
            <div className={styles['dashboard-item-title']}>
              <Typography variant="h3">Films</Typography>
            </div>
          </div>
        </Link>
        <Link href="/planets" className={styles['dashboard-item']}>
          <div className={styles['dashboard-item-content']}>
            <PlanetsSVG className={styles['dashboard-item-icon']} />
            <div className={styles['dashboard-item-title']}>
              <Typography variant="h3">Planets</Typography>
            </div>
          </div>
        </Link>
        <Link href="/starships" className={styles['dashboard-item']}>
          <div className={styles['dashboard-item-content']}>
            <StarshipsSVG className={styles['dashboard-item-icon']} />
            <div className={styles['dashboard-item-title']}>
              <Typography variant="h3">Starships</Typography>
            </div>
          </div>
        </Link>
        <Link href="/characters" className={styles['dashboard-item']}>
          <div className={styles['dashboard-item-content']}>
            <CharactersSVG className={styles['dashboard-item-icon']} />
            <div className={styles['dashboard-item-title']}>
              <Typography variant="h3">Characters</Typography>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
