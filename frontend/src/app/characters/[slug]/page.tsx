import { Person } from '@/shared/domain/person.entity';
import ListToString from '@/shared/helpers/list-to-string/list-to-string';
import LabelValue from '@/shared/ui/label-value/label-value';
import SectionContent from '@/shared/ui/section-content/section-content';
import SectionHeader from '@/shared/ui/section-header/section-header';
import Typography from '@/shared/ui/typography/typography';

// TODO: Move to env
const API_URL = 'http://localhost:3333';

interface Props {
  params: Promise<{ slug: string }>;
}
export default async function CharacterPage(props: Props) {
  const { slug } = await props.params;
  const result = await fetch(`${API_URL}/people/${slug}`);
  const data: Person = await result.json();

  return (
    <section>
      <SectionHeader>
        <Typography variant="h1">{data.name}</Typography>
      </SectionHeader>
      <SectionContent>
        <LabelValue label="Gender" value={data.gender} />
        <LabelValue label="Birth year" value={data.birthYear} />
        <LabelValue label="Height" value={data.height} />
        <LabelValue label="Eye color" value={data.eyeColor} />
        <LabelValue label="Hair color" value={data.hairColor} />
        <LabelValue label="Skin color" value={data.skinColor} />
        <LabelValue label="Mass" value={data.mass} />
        <LabelValue label="Homeworld ID" value={data.homeworldId} />
        <LabelValue label="Films" value={ListToString(data.films)} />
        <LabelValue label="Species" value={ListToString(data.species)} />
        <LabelValue label="Starships" value={ListToString(data.starships)} />
        <LabelValue label="Vehicles" value={ListToString(data.vehicles)} />
        <LabelValue label="Created" value={data.created} />
        <LabelValue label="Edited" value={data.edited} />
      </SectionContent>
    </section>
  );
}
