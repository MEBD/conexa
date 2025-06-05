import { API } from '@/shared/constants/api';
import { Film } from '@/shared/domain/film.entity';
import ListToString from '@/shared/helpers/list-to-string/list-to-string';
import LabelValue from '@/shared/ui/label-value/label-value';
import SectionContent from '@/shared/ui/section-content/section-content';
import SectionHeader from '@/shared/ui/section-header/section-header';
import Typography from '@/shared/ui/typography/typography';

interface Props {
  params: Promise<{ slug: string }>;
}
export default async function FilmPage(props: Props) {
  let hasError = false;
  let data: Film | null = null;
  try {
    const { slug } = await props.params;
    const result = await fetch(`${API.basePath}/${API.films}/${slug}`);
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
            <Typography variant="h1">{data.title}</Typography>
          </SectionHeader>
          <SectionContent>
            <Typography variant="caption">#{data.id}</Typography>
            <Typography variant="body-variant">{data.openingCrawl}</Typography>
          </SectionContent>
          <SectionContent>
            <LabelValue label="Episode ID" value={data.episodeId} />
            <LabelValue label="Director" value={data.director} />
            <LabelValue label="Producer" value={data.producer} />
            <LabelValue label="Release date" value={data.releaseDate} />
            <LabelValue
              label="Characters"
              value={ListToString(data.characters)}
            />
            <LabelValue label="Planets" value={ListToString(data.planets)} />
            <LabelValue
              label="Starships"
              value={ListToString(data.starships)}
            />
            <LabelValue label="Vehicles" value={ListToString(data.vehicles)} />
            <LabelValue label="Species" value={ListToString(data.species)} />
            <LabelValue label="Created" value={data.created} />
            <LabelValue label="Edited" value={data.edited} />
          </SectionContent>
        </>
      )}
    </section>
  );
}
