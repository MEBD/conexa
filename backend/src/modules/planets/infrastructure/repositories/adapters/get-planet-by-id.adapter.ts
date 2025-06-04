import { getIDFromURL } from '@application/infrastructure/adapters/get-id-from-url';
import { Planet } from '@planets/domain/planet.entity';

export interface PlanetByIdRaw {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export const getPlanetByIdAdapter = (data: PlanetByIdRaw): Planet => {
  return new Planet(
    getIDFromURL(data.url),
    data.name,
    data.rotation_period,
    data.orbital_period,
    data.diameter,
    data.climate,
    data.gravity,
    data.terrain,
    data.surface_water,
    data.population,
    data.residents.map((item) => getIDFromURL(item)),
    data.films.map((item) => getIDFromURL(item)),
    data.created,
    data.edited,
  );
};
