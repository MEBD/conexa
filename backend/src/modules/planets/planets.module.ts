import { Module } from '@nestjs/common';
import { GetPaginatedPlanetsController } from '@planets/infrastructure/controllers/get-paginated-planets.controller';
import { GetPlanetByIdController } from '@planets/infrastructure/controllers/get-planet-by-id.controller';
import { PlanetsService } from '@planets/application/services/planets.service';
import { GetPlanetByIdUseCase } from '@planets/application/use-cases/get-planet-by-id.use-case';
import { GetPaginatedPlanetsUseCase } from '@planets/application/use-cases/get-paginated-planets.use-case';
import { HTTPPlanetsRepository } from '@planets/infrastructure/repositories/http-planets.repository';
import { HttpModule } from '@nestjs/axios';
import { PLANETS_RESPOSITORY_KEY } from '@planets/domain/planets.constants';

@Module({
  imports: [HttpModule],
  controllers: [GetPaginatedPlanetsController, GetPlanetByIdController],
  providers: [
    {
      provide: PLANETS_RESPOSITORY_KEY,
      useClass: HTTPPlanetsRepository,
    },
    PlanetsService,
    GetPlanetByIdUseCase,
    GetPaginatedPlanetsUseCase,
  ],
})
export class PlanetsModule {}
