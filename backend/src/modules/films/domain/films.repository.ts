import { Film } from '@films/domain/film.entity';
import { PaginatedFilms } from '@films/domain/paginated-films.entity';

export interface FilmsRepository {
  getPaginatedFilms(page?: string): Promise<PaginatedFilms>;
  getFilmById(is: number): Promise<Film>;
}
