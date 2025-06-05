import InfiniteScrollItem from '@/shared/components/infinite-scroll-item/infinite-scroll-item';
import { Film } from '@/shared/domain/film.entity';
import LabelValue from '@/shared/ui/label-value/label-value';
import { ReactNode } from 'react';

interface Props {
  data: Film;
}

export default function FilmItem(props: Props): ReactNode {
  const { data } = props;
  return (
    <InfiniteScrollItem id={data.id} title={data.title}>
      <LabelValue label="Episode ID" value={data.episodeId} />
      <LabelValue label="Director" value={data.director} />
      <LabelValue label="Producer" value={data.producer} />
      <LabelValue label="Release date" value={data.releaseDate} />
    </InfiniteScrollItem>
  );
}
