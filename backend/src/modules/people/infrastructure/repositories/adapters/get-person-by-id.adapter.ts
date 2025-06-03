import { getIDFromURL } from '@application/infrastructure/adapters/get-id-from-url';
import { Person } from '@people/domain/person.entity';

export interface PersonByIdRaw {
  name: string;
  gender: string;
  birth_year: string;
  height: string;
  eye_color: string;
  hair_color: string;
  skin_color: string;
  mass: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  created: string;
  edited: string;
  url: string;
}

export const getPersonByIdAdapter = (data: PersonByIdRaw): Person => {
  return new Person(
    getIDFromURL(data.url),
    data.name,
    data.gender,
    data.birth_year,
    parseInt(data.height),
    data.eye_color,
    data.hair_color,
    data.skin_color,
    data.mass,
    getIDFromURL(data.homeworld),
    data.films.map((item) => getIDFromURL(item)),
    data.species.map((item) => getIDFromURL(item)),
    data.starships.map((item) => getIDFromURL(item)),
    data.vehicles.map((item) => getIDFromURL(item)),
    data.created,
    data.edited,
  );
};
