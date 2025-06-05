import { Starship } from '@/shared/domain/starship.entity';
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
export default async function StarshipPage(props: Props) {
  const { slug } = await props.params;
  const result = await fetch(`${API_URL}/starships/${slug}`);
  const data: Starship = await result.json();

  return (
    <section>
      <SectionHeader>
        <Typography variant="h1">{data.name}</Typography>
      </SectionHeader>
      <SectionContent>
        <LabelValue label="Model" value={data.model} />
        <LabelValue label="Manufacturer" value={data.manufacturer} />
        <LabelValue label="Cost in credits" value={data.costInCredits} />
        <LabelValue label="Length" value={data.length} />
        <LabelValue
          label="Max atmosphering speed"
          value={data.maxAtmospheringSpeed}
        />
        <LabelValue label="Crew" value={data.crew} />
        <LabelValue label="Passengers" value={data.passengers} />
        <LabelValue label="Cargo capacity" value={data.cargoCapacity} />
        <LabelValue label="Consumables" value={data.consumables} />
        <LabelValue label="Hyperdrive rating" value={data.hyperdriveRating} />
        <LabelValue label="MGLT" value={data.MGLT} />
        <LabelValue label="Starship class" value={data.starshipClass} />
        <LabelValue label="Pilots" value={ListToString(data.pilots)} />
        <LabelValue label="Films" value={ListToString(data.films)} />
        <LabelValue label="Created" value={data.created} />
        <LabelValue label="Edited" value={data.edited} />
      </SectionContent>
    </section>
  );
}
