import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { StarshipsService } from '@starships/application/services/starships.service';
import { GetPaginatedStarshipsUseCase } from '@starships/application/use-cases/get-paginated-starships.use-case';
import { GetStarshipByIdUseCase } from '@starships/application/use-cases/get-starship-by-id.use-case';
import { STARSHIPS_RESPOSITORY_KEY } from '@starships/domain/starships.constants';
import { GetPaginatedStarshipsController } from '@starships/infrastructure/controllers/get-paginated-starships.controller';
import { GetStarshipByIdController } from '@starships/infrastructure/controllers/get-starship-by-id.controller';
import { HTTPStarshipsRepository } from '@starships/infrastructure/repositories/http-starships.repository';

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
  controllers: [GetPaginatedStarshipsController, GetStarshipByIdController],
  providers: [
    {
      provide: STARSHIPS_RESPOSITORY_KEY,
      useClass: HTTPStarshipsRepository,
    },
    StarshipsService,
    GetStarshipByIdUseCase,
    GetPaginatedStarshipsUseCase,
  ],
})
export class StarshipsModule {}
