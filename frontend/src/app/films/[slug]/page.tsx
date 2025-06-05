import { Film } from '@/shared/domain/film.entity';
import SectionContent from '@/shared/ui/section-content/section-content';
import SectionHeader from '@/shared/ui/section-header/section-header';
import Typography from '@/shared/ui/typography/typography';
import styles from './page.module.css';

// TODO: Move to env
const API_URL = 'http://localhost:3333';

interface Props {
  params: Promise<{ slug: string }>;
}
export default async function FilmPage(props: Props) {
  const { slug } = await props.params;
  const result = await fetch(`${API_URL}/films/${slug}`);
  const data: Film = await result.json();

  return (
    <div className={styles['films-page']}>
      <SectionHeader>
        <Typography variant="h1">{data.title}</Typography>
      </SectionHeader>
      <SectionContent>
        <Typography variant="caption">#{data.id}</Typography>
        <Typography variant="body-variant">{data.openingCrawl}</Typography>
      </SectionContent>
      <SectionContent>
        <Typography variant="body-variant">
          Episode id: {data.episodeId}
        </Typography>
        <Typography variant="body-variant">
          Director: {data.director}
        </Typography>
        <Typography variant="body-variant">
          Producer: {data.producer}
        </Typography>
        <Typography variant="body-variant">
          Release date: {data.releaseDate}
        </Typography>
        <Typography variant="body-variant">
          Characters: {data.characters.map((item) => `${item}, `)}
        </Typography>
        <Typography variant="body-variant">
          Planets: {data.planets.map((item) => `${item}, `)}
        </Typography>
        <Typography variant="body-variant">
          Starships: {data.starships.map((item) => `${item}, `)}
        </Typography>
        <Typography variant="body-variant">
          Vehicles: {data.vehicles.map((item) => `${item}, `)}
        </Typography>
        <Typography variant="body-variant">
          Species: {data.species.map((item) => `${item}, `)}
        </Typography>
        <Typography variant="body-variant">Created: {data.created}</Typography>
        <Typography variant="body-variant">Edited: {data.edited}</Typography>
      </SectionContent>
    </div>
  );
}
