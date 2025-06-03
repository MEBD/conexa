import { Injectable, Inject } from '@nestjs/common';
import { PlanetsRepository } from '@planets/domain/planets.repository';
import { PaginatedPlanets } from '@planets/domain/paginated-planets.entity';
import { Planet } from '@planets/domain/planet.entity';
import { PLANETS_RESPOSITORY_KEY } from '@planets/domain/planets.constants';

@Injectable()
export class PlanetsService {
  constructor(
    @Inject(PLANETS_RESPOSITORY_KEY)
    private readonly repository: PlanetsRepository,
  ) {}

  async getPlanetById(id: number): Promise<Planet> {
    return this.repository.getPlanetById(id);
  }

  async getPaginatedPlanets(page?: string): Promise<PaginatedPlanets> {
    return this.repository.getPaginatedPlanets(page);
  }
}
