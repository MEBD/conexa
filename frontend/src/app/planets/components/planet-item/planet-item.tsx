import InfiniteScrollItem from '@/shared/components/infinite-scroll-item/infinite-scroll-item';
import { Planet } from '@/shared/domain/planet.entity';
import LabelValue from '@/shared/ui/label-value/label-value';
import { ReactNode } from 'react';

interface Props {
  data: Planet;
}

export default function PlanetItem(props: Props): ReactNode {
  const { data } = props;
  return (
    <InfiniteScrollItem id={data.id} title={data.name}>
      <LabelValue label="Diameter" value={data.diameter} />
      <LabelValue label="Gravity" value={data.gravity} />
      <LabelValue label="Terrain" value={data.terrain} />
      <LabelValue label="Population" value={data.population} />
    </InfiniteScrollItem>
  );
}
