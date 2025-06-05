import { API } from '@/shared/constants/api';
import { Planet } from '@/shared/domain/planet.entity';
import ListToString from '@/shared/helpers/list-to-string/list-to-string';
import LabelValue from '@/shared/ui/label-value/label-value';
import SectionContent from '@/shared/ui/section-content/section-content';
import SectionHeader from '@/shared/ui/section-header/section-header';
import Typography from '@/shared/ui/typography/typography';

interface Props {
  params: Promise<{ slug: string }>;
}
export default async function PlanetPage(props: Props) {
  let hasError = false;
  let data: Planet | null = null;
  try {
    const { slug } = await props.params;
    const result = await fetch(`${API.basePath}/${API.planets}/${slug}`);
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
            <LabelValue label="Rotation period" value={data.rotationPeriod} />
            <LabelValue label="Orbital period" value={data.orbitalPeriod} />
            <LabelValue label="Diameter" value={data.diameter} />
            <LabelValue label="Climate" value={data.climate} />
            <LabelValue label="Gravity" value={data.gravity} />
            <LabelValue label="Terrain" value={data.terrain} />
            <LabelValue label="Urface water" value={data.surfaceWater} />
            <LabelValue label="Population" value={data.population} />
            <LabelValue
              label="Residents"
              value={ListToString(data.residents)}
            />
            <LabelValue label="Films" value={ListToString(data.films)} />
            <LabelValue label="Created" value={data.created} />
            <LabelValue label="Edited" value={data.edited} />
          </SectionContent>
        </>
      )}
    </section>
  );
}
