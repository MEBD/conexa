import { getPageFromURL } from '@application/infrastructure/adapters/get-page-from-url';
import { PaginatedStarships } from '@starships/domain/paginated-starships.entity';
import {
  getStarshipByIdAdapter,
  StarshipByIdRaw,
} from '@starships/infrastructure/repositories/adapters/get-starship-by-id.adapter';

export interface PaginatedStarshipsRaw {
  count: number;
  next: string;
  previous: string;
  results: StarshipByIdRaw[];
}

export const getPaginatedStarshipsAdapter = (
  data: PaginatedStarshipsRaw,
): PaginatedStarships => {
  return new PaginatedStarships(
    data.count,
    getPageFromURL(data.next),
    getPageFromURL(data.previous),
    data.results.map((item) => getStarshipByIdAdapter(item)),
  );
};
