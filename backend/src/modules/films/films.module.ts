import { FilmsService } from '@films/application/services/films.service';
import { GetFilmByIdUseCase } from '@films/application/use-cases/get-film-by-id.use-case';
import { GetPaginatedFilmsUseCase } from '@films/application/use-cases/get-paginated-films.use-case';
import { FILMS_RESPOSITORY_KEY } from '@films/domain/films.constants';
import { GetFilmByIdController } from '@films/infrastructure/controllers/get-film-by-id.controller';
import { GetPaginatedFilmsController } from '@films/infrastructure/controllers/get-paginated-films.controller';
import { HTTPFilmsRepository } from '@films/infrastructure/repositories/http-films.repository';
import { Module } from '@nestjs/common';

@Module({
  controllers: [GetPaginatedFilmsController, GetFilmByIdController],
  providers: [
    {
      provide: FILMS_RESPOSITORY_KEY,
      useClass: HTTPFilmsRepository,
    },
    FilmsService,
    GetFilmByIdUseCase,
    GetPaginatedFilmsUseCase,
  ],
})
export class FilmsModule {}
