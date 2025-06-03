import { ApplicationConfiguration } from '@application/domain/application-configuration';
import { HTTPGetData } from '@application/infrastructure/http/http-get-data';
import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PaginatedStarships } from '@starships/domain/paginated-starships.entity';
import { Starship } from '@starships/domain/starship.entity';
import { StarshipsRepository } from '@starships/domain/starships.repository';
import {
  getPaginatedStarshipsAdapter,
  PaginatedStarshipsRaw,
} from '@starships/infrastructure/repositories/adapters/get-paginated-starships.adapter';
import {
  getStarshipByIdAdapter,
  StarshipByIdRaw,
} from '@starships/infrastructure/repositories/adapters/get-starship-by-id.adapter';
import { Cache } from 'cache-manager';

@Injectable()
export class HTTPStarshipsRepository implements StarshipsRepository {
  private baseURL: string;

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly config: ConfigService<ApplicationConfiguration>,
    private readonly httpService: HttpService,
  ) {
    this.baseURL = this.config.get<string>('STAR_WARS_API')!;
  }

  async getPaginatedStarships(page: string): Promise<PaginatedStarships> {
    return HTTPGetData<PaginatedStarshipsRaw, PaginatedStarships>({
      service: this.httpService,
      cache: this.cacheManager,
      url: `${this.baseURL}/starships?page=${page}`,
      adapter: getPaginatedStarshipsAdapter,
    });
  }

  async getStarshipById(id: number): Promise<Starship> {
    return HTTPGetData<StarshipByIdRaw, Starship>({
      service: this.httpService,
      cache: this.cacheManager,
      url: `${this.baseURL}/starships/${id}`,
      adapter: getStarshipByIdAdapter,
    });
  }
}
