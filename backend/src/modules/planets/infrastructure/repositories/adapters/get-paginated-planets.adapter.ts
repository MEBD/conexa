import { getPageFromURL } from '@application/infrastructure/adapters/get-page-from-url';
import { PaginatedPlanets } from '@planets/domain/paginated-planets.entity';
import {
  getPlanetByIdAdapter,
  PlanetByIdRaw,
} from '@planets/infrastructure/repositories/adapters/get-planet-by-id.adapter';

export interface PaginatedPlanetsRaw {
  count: number;
  next: string;
  previous: string;
  results: PlanetByIdRaw[];
}

export const getPaginatedPlanetsAdapter = (
  data: PaginatedPlanetsRaw,
): PaginatedPlanets => {
  return new PaginatedPlanets(
    data.count,
    getPageFromURL(data.next),
    getPageFromURL(data.previous),
    data.results.map((item) => getPlanetByIdAdapter(item)),
  );
};
