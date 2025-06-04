import { ReactNode } from 'react';

import Typography from '@/components/typography/typography';

import InfiniteScrollItem from '@/components/infinite-scroll-item/infinite-scroll-item';
import { Person } from '@/shared/domain/person.entity';

interface Props {
  key: string;
  data: Person;
}

export default function PeronItem(props: Props): ReactNode {
  const { data } = props;
  return (
    <InfiniteScrollItem id={data.id} title={data.name}>
      <Typography variant="body">Gender: {data.gender}</Typography>
      <Typography variant="body">Birth year: {data.birthYear}</Typography>
      <Typography variant="body">Height: {data.height}</Typography>
      <Typography variant="body">Eye color: {data.eyeColor}</Typography>
      <Typography variant="body">Hair color: {data.hairColor}</Typography>
      <Typography variant="body">Skin color: {data.skinColor}</Typography>
      <Typography variant="body">Mass: {data.mass}</Typography>
    </InfiniteScrollItem>
  );
}
