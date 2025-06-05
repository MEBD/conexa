import InfiniteScrollItem from '@/shared/components/infinite-scroll-item/infinite-scroll-item';
import { Film } from '@/shared/domain/film.entity';
import Typography from '@/shared/ui/typography/typography';
import { ReactNode } from 'react';

interface Props {
  data: Film;
}

export default function FilmItem(props: Props): ReactNode {
  const { data } = props;
  return (
    <InfiniteScrollItem id={data.id} title={data.title}>
      <Typography variant="body">Episode ID: {data.episodeId}</Typography>
      <Typography variant="body">Director: {data.director}</Typography>
      <Typography variant="body">Producer: {data.producer}</Typography>
      <Typography variant="body">Release date: {data.releaseDate}</Typography>
    </InfiniteScrollItem>
  );
}
