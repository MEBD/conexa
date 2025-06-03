import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { StarshipsService } from '@starships/application/services/starships.service';
import { GetPaginatedStarshipsUseCase } from '@starships/application/use-cases/get-paginated-starships.use-case';
import { GetStarshipByIdUseCase } from '@starships/application/use-cases/get-starship-by-id.use-case';
import { STARSHIPS_RESPOSITORY_KEY } from '@starships/domain/starships.constants';
import { GetPaginatedStarshipsController } from '@starships/infrastructure/controllers/get-paginated-starships.controller';
import { GetStarshipByIdController } from '@starships/infrastructure/controllers/get-starship-by-id.controller';
import { HTTPStarshipsRepository } from '@starships/infrastructure/repositories/http-starships.repository';

@Module({
  imports: [HttpModule],
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
