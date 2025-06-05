import InfiniteScrollItem from '@/shared/components/infinite-scroll-item/infinite-scroll-item';
import { Starship } from '@/shared/domain/starship.entity';
import LabelValue from '@/shared/ui/label-value/label-value';
import { ReactNode } from 'react';

interface Props {
  data: Starship;
}

export default function StarshipItem(props: Props): ReactNode {
  const { data } = props;
  return (
    <InfiniteScrollItem id={data.id} title={data.name}>
      <LabelValue label="Model" value={data.model} />
      <LabelValue label="Cost in credits" value={data.costInCredits} />
      <LabelValue label="Hyperdrive rating" value={data.hyperdriveRating} />
    </InfiniteScrollItem>
  );
}
