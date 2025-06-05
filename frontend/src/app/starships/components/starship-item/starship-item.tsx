import InfiniteScrollItem from '@/shared/components/infinite-scroll-item/infinite-scroll-item';
import { Starship } from '@/shared/domain/starship.entity';
import Typography from '@/shared/ui/typography/typography';
import { ReactNode } from 'react';

interface Props {
  data: Starship;
}

export default function StarshipItem(props: Props): ReactNode {
  const { data } = props;
  return (
    <InfiniteScrollItem id={data.id} title={data.name}>
      <Typography variant="body">Model: {data.model}</Typography>
      <Typography variant="body">Manufacturer: {data.manufacturer}</Typography>
      <Typography variant="body">
        Cost in credits: {data.costInCredits}
      </Typography>
      <Typography variant="body">Length: {data.length}</Typography>
      <Typography variant="body">
        Max atmosphering speed: {data.maxAtmospheringSpeed}
      </Typography>
      <Typography variant="body">Crew: {data.crew}</Typography>
      <Typography variant="body">Passengers: {data.passengers}</Typography>
      <Typography variant="body">
        Cargo capacity: {data.cargoCapacity}
      </Typography>
      <Typography variant="body">Consumables: {data.consumables}</Typography>
      <Typography variant="body">
        Hyperdrive rating: {data.hyperdriveRating}
      </Typography>
      <Typography variant="body">MGLT: {data.MGLT}</Typography>
      <Typography variant="body">
        Starship class: {data.starshipClass}
      </Typography>
    </InfiniteScrollItem>
  );
}
// <Typography variant="body">Name: {data.name}</Typography>
// <Typography variant="body">Pilots: {data.pilots}</Typography>
// <Typography variant="body">Films: {data.films}</Typography>
// <Typography variant="body">Created: {data.created}</Typography>
// <Typography variant="body">Edited: {data.edited}</Typography>
