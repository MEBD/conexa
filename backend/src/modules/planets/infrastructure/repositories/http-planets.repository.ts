import { ApplicationConfiguration } from '@application/domain/application-configuration';
import { HTTPGetData } from '@application/infrastructure/http/http-get-data';
import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PaginatedPlanets } from '@planets/domain/paginated-planets.entity';
import { Planet } from '@planets/domain/planet.entity';
import { PlanetsRepository } from '@planets/domain/planets.repository';
import {
  getPaginatedPlanetsAdapter,
  PaginatedPlanetsRaw,
} from '@planets/infrastructure/repositories/adapters/get-paginated-planets.adapter';
import {
  getPlanetByIdAdapter,
  PlanetByIdRaw,
} from '@planets/infrastructure/repositories/adapters/get-planet-by-id.adapter';
import { Cache } from 'cache-manager';

@Injectable()
export class HTTPPlanetsRepository implements PlanetsRepository {
  private baseURL: string;

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly config: ConfigService<ApplicationConfiguration>,
    private readonly httpService: HttpService,
  ) {
    this.baseURL = this.config.get<string>('STAR_WARS_API')!;
  }

  async getPaginatedPlanets(page: string): Promise<PaginatedPlanets> {
    return HTTPGetData<PaginatedPlanetsRaw, PaginatedPlanets>({
      service: this.httpService,
      cache: this.cacheManager,
      url: `${this.baseURL}/planets?page=${page}`,
      adapter: getPaginatedPlanetsAdapter,
    });
  }

  async getPlanetById(id: number): Promise<Planet> {
    return HTTPGetData<PlanetByIdRaw, Planet>({
      service: this.httpService,
      cache: this.cacheManager,
      url: `${this.baseURL}/planets/${id}`,
      adapter: getPlanetByIdAdapter,
    });
  }
}
