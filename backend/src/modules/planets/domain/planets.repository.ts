import { PaginatedPlanets } from '@planets/domain/paginated-planets.entity';
import { Planet } from '@planets/domain/planet.entity';

export interface PlanetsRepository {
  getPaginatedPlanets(page?: string): Promise<PaginatedPlanets>;
  getPlanetById(is: number): Promise<Planet>;
}
