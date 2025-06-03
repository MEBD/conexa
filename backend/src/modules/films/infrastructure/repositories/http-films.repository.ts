import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { PaginatedFilms } from '@films/domain/paginated-films.entity';
import { FilmsRepository } from '@films/domain/films.repository';
import { Film } from '@films/domain/film.entity';
import { ApplicationConfiguration } from '@application/domain/application-configuration';
import { HTTPGetData } from '@application/infrastructure/http/http-get-data';
import {
  getPaginatedFilmsAdapter,
  PaginatedFilmsRaw,
} from '@films/infrastructure/repositories/adapters/get-paginated-films.adapter';
import {
  FilmByIdRaw,
  getFilmByIdAdapter,
} from '@films/infrastructure/repositories/adapters/get-film-by-id.adapter';

@Injectable()
export class HTTPFilmsRepository implements FilmsRepository {
  private baseURL: string;

  constructor(
    private readonly config: ConfigService<ApplicationConfiguration>,
    private readonly httpService: HttpService,
  ) {
    this.baseURL = this.config.get<string>('STAR_WARS_API')!;
  }

  async getPaginatedFilms(page: string): Promise<PaginatedFilms> {
    return HTTPGetData<PaginatedFilmsRaw, PaginatedFilms>({
      service: this.httpService,
      url: `${this.baseURL}/films?page=${page}`,
      adapter: getPaginatedFilmsAdapter,
    });
  }

  async getFilmById(id: number): Promise<Film> {
    return HTTPGetData<FilmByIdRaw, Film>({
      service: this.httpService,
      url: `${this.baseURL}/films/${id}`,
      adapter: getFilmByIdAdapter,
    });
  }
}
