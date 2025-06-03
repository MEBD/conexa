import { getPageFromURL } from '@application/infrastructure/adapters/get-page-from-url';
import { PaginatedFilms } from '@films/domain/paginated-films.entity';
import {
  getFilmByIdAdapter,
  FilmByIdRaw,
} from '@films/infrastructure/repositories/adapters/get-film-by-id.adapter';

export interface PaginatedFilmsRaw {
  count: number;
  next: string;
  previous: string;
  results: FilmByIdRaw[];
}

export const getPaginatedFilmsAdapter = (
  data: PaginatedFilmsRaw,
): PaginatedFilms => {
  return new PaginatedFilms(
    data.count,
    getPageFromURL(data.next),
    getPageFromURL(data.previous),
    data.results.map((item) => getFilmByIdAdapter(item)),
  );
};
