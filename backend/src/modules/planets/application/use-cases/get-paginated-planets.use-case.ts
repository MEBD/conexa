import { Inject, Injectable } from '@nestjs/common';
import { PlanetsService } from '@planets/application/services/planets.service';
import { PaginatedPlanets } from '@planets/domain/paginated-planets.entity';

@Injectable()
export class GetPaginatedPlanetsUseCase {
  constructor(
    @Inject(PlanetsService) private readonly service: PlanetsService,
  ) {}

  async run(page?: string): Promise<PaginatedPlanets> {
    return await this.service.getPaginatedPlanets(page);
  }
}
