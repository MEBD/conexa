import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { PlanetsService } from '@planets/application/services/planets.service';
import { GetPaginatedPlanetsUseCase } from '@planets/application/use-cases/get-paginated-planets.use-case';
import { GetPlanetByIdUseCase } from '@planets/application/use-cases/get-planet-by-id.use-case';
import { PLANETS_RESPOSITORY_KEY } from '@planets/domain/planets.constants';
import { GetPaginatedPlanetsController } from '@planets/infrastructure/controllers/get-paginated-planets.controller';
import { GetPlanetByIdController } from '@planets/infrastructure/controllers/get-planet-by-id.controller';
import { HTTPPlanetsRepository } from '@planets/infrastructure/repositories/http-planets.repository';

@Module({
  imports: [
      HttpModule.register({
        maxRedirects: 3,
        timeout: 7 * 1000,
      }),
      CacheModule.register({
        ttl: 24 * 60 * 60 * 1000,
        max: 2000,
      }),
    ],
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
