import { Film } from '@films/domain/film.entity';
import { FILMS_RESPOSITORY_KEY } from '@films/domain/films.constants';
import { FilmsRepository } from '@films/domain/films.repository';
import { PaginatedFilms } from '@films/domain/paginated-films.entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FilmsService {
  constructor(
    @Inject(FILMS_RESPOSITORY_KEY)
    private readonly repository: FilmsRepository,
  ) {}

  async getFilmById(id: number): Promise<Film> {
    return this.repository.getFilmById(id);
  }

  async getPaginatedFilms(page?: string): Promise<PaginatedFilms> {
    return this.repository.getPaginatedFilms(page);
  }
}
