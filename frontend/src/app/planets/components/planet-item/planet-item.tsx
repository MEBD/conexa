import { ReactNode } from 'react';

import Typography from '@/components/typography/typography';

import InfiniteScrollItem from '@/components/infinite-scroll-item/infinite-scroll-item';
import { Planet } from '@/shared/domain/planet.entity';

interface Props {
  key: string;
  data: Planet;
}

export default function PlanetItem(props: Props): ReactNode {
  const { data } = props;
  return (
    <InfiniteScrollItem id={data.id} title={data.name}>
      <Typography variant="body">
        Rotation period: {data.rotationPeriod}
      </Typography>
      <Typography variant="body">
        Orbital period: {data.orbitalPeriod}
      </Typography>
      <Typography variant="body">Diameter: {data.diameter}</Typography>
      <Typography variant="body">Climate: {data.climate}</Typography>
      <Typography variant="body">Gravity: {data.gravity}</Typography>
      <Typography variant="body">Terrain: {data.terrain}</Typography>
      <Typography variant="body">Surface water: {data.surfaceWater}</Typography>
      <Typography variant="body">Population: {data.population}</Typography>
    </InfiniteScrollItem>
  );
}
