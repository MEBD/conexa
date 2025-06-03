import { Film } from '@films/domain/film.entity';

export class PaginatedFilms {
  constructor(
    public count: number,
    public next: number | null,
    public previous: number | null,
    public results: Film[],
  ) {}
}
