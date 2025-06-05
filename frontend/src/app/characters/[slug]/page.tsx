import { API } from '@/shared/constants/api';
import { Person } from '@/shared/domain/person.entity';
import ListToString from '@/shared/helpers/list-to-string/list-to-string';
import LabelValue from '@/shared/ui/label-value/label-value';
import SectionContent from '@/shared/ui/section-content/section-content';
import SectionHeader from '@/shared/ui/section-header/section-header';
import Typography from '@/shared/ui/typography/typography';

interface Props {
  params: Promise<{ slug: string }>;
}
export default async function CharacterPage(props: Props) {
  let hasError = false;
  let data: Person | null = null;
  try {
    const { slug } = await props.params;
    const result = await fetch(`${API.basePath}/${API.characters}/${slug}`);
    data = await result.json();
  } catch (error) {
    console.error(error);
    hasError = true;
  }

  return (
    <section>
      {hasError && (
        <SectionHeader>
          <Typography variant="h4">Server error!</Typography>
        </SectionHeader>
      )}
      {!hasError && data && (
        <>
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
            <LabelValue
              label="Starships"
              value={ListToString(data.starships)}
            />
            <LabelValue label="Vehicles" value={ListToString(data.vehicles)} />
            <LabelValue label="Created" value={data.created} />
            <LabelValue label="Edited" value={data.edited} />
          </SectionContent>
        </>
      )}
    </section>
  );
}
