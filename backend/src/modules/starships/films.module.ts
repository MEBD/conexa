import { Module } from '@nestjs/common';
import { GetPaginatedStarshipsController } from '@starships/infrastructure/controllers/get-paginated-starships.controller';
import { GetStarshipByIdController } from '@starships/infrastructure/controllers/get-starship-by-id.controller';
import { StarshipsService } from '@starships/application/services/starships.service';
import { GetStarshipByIdUseCase } from '@starships/application/use-cases/get-starship-by-id.use-case';
import { GetPaginatedStarshipsUseCase } from '@starships/application/use-cases/get-paginated-starships.use-case';
import { HTTPStarshipsRepository } from '@starships/infrastructure/repositories/http-starships.repository';
import { HttpModule } from '@nestjs/axios';
import { STARSHIPS_RESPOSITORY_KEY } from '@starships/domain/starships.constants';

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
