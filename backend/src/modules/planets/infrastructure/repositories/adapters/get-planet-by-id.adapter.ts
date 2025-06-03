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
    parseInt(data.rotation_period),
    parseInt(data.orbital_period),
    parseInt(data.diameter),
    data.climate,
    data.gravity,
    data.terrain,
    parseInt(data.surface_water),
    parseInt(data.population),
    data.residents.map((item) => getIDFromURL(item)),
    data.films.map((item) => getIDFromURL(item)),
    data.created,
    data.edited,
  );
};
