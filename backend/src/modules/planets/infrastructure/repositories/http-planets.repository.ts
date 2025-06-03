import { ApplicationConfiguration } from '@application/domain/application-configuration';
import { HTTPGetData } from '@application/infrastructure/http/http-get-data';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
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

@Injectable()
export class HTTPPlanetsRepository implements PlanetsRepository {
  private baseURL: string;

  constructor(
    private readonly config: ConfigService<ApplicationConfiguration>,
    private readonly httpService: HttpService,
  ) {
    this.baseURL = this.config.get<string>('STAR_WARS_API')!;
  }

  async getPaginatedPlanets(page: string): Promise<PaginatedPlanets> {
    return HTTPGetData<PaginatedPlanetsRaw, PaginatedPlanets>({
      service: this.httpService,
      url: `${this.baseURL}/planets?page=${page}`,
      adapter: getPaginatedPlanetsAdapter,
    });
  }

  async getPlanetById(id: number): Promise<Planet> {
    return HTTPGetData<PlanetByIdRaw, Planet>({
      service: this.httpService,
      url: `${this.baseURL}/planets/${id}`,
      adapter: getPlanetByIdAdapter,
    });
  }
}
