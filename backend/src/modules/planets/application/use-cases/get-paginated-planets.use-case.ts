import { Inject, Injectable } from '@nestjs/common';
import { PaginatedPlanets } from '@planets/domain/paginated-planets.entity';
import { PlanetsService } from '@planets/application/services/planets.service';

@Injectable()
export class GetPaginatedPlanetsUseCase {
  constructor(
    @Inject(PlanetsService) private readonly service: PlanetsService,
  ) {}

  async run(page?: string): Promise<PaginatedPlanets> {
    return await this.service.getPaginatedPlanets(page);
  }
}
