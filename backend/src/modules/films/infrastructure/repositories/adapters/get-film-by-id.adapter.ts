import { getIDFromURL } from '@application/infrastructure/adapters/get-id-from-url';
import { Film } from '@films/domain/film.entity';

export interface FilmByIdRaw {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export const getFilmByIdAdapter = (data: FilmByIdRaw): Film => {
  return new Film(
    getIDFromURL(data.url),
    data.title,
    data.episode_id,
    data.opening_crawl,
    data.director,
    data.producer,
    data.release_date,
    data.characters.map((item) => getIDFromURL(item)),
    data.planets.map((item) => getIDFromURL(item)),
    data.starships.map((item) => getIDFromURL(item)),
    data.vehicles.map((item) => getIDFromURL(item)),
    data.species.map((item) => getIDFromURL(item)),
    data.created,
    data.edited,
  );
};
