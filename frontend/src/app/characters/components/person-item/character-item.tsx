import InfiniteScrollItem from '@/shared/components/infinite-scroll-item/infinite-scroll-item';
import { Person } from '@/shared/domain/person.entity';
import LabelValue from '@/shared/ui/label-value/label-value';
import { ReactNode } from 'react';

interface Props {
  data: Person;
}

export default function CharacterItem(props: Props): ReactNode {
  const { data } = props;
  return (
    <InfiniteScrollItem id={data.id} title={data.name}>
      <LabelValue label="Gender" value={data.gender} />
      <LabelValue label="Birth year" value={data.birthYear} />
      <LabelValue label="Height" value={data.height} />
    </InfiniteScrollItem>
  );
}
