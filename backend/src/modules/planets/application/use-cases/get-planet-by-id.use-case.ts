import { Inject, Injectable } from '@nestjs/common';
import { PlanetsService } from '@planets/application/services/planets.service';
import { Planet } from '@planets/domain/planet.entity';

@Injectable()
export class GetPlanetByIdUseCase {
  constructor(
    @Inject(PlanetsService) private readonly service: PlanetsService,
  ) {}

  async run(id: number): Promise<Planet> {
    return await this.service.getPlanetById(id);
  }
}
