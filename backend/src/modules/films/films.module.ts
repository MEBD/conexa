import { Module } from '@nestjs/common';
import { GetPaginatedFilmsController } from '@films/infrastructure/controllers/get-paginated-films.controller';
import { GetFilmByIdController } from '@films/infrastructure/controllers/get-film-by-id.controller';
import { FilmsService } from '@films/application/services/films.service';
import { GetFilmByIdUseCase } from '@films/application/use-cases/get-film-by-id.use-case';
import { GetPaginatedFilmsUseCase } from '@films/application/use-cases/get-paginated-films.use-case';
import { HTTPFilmsRepository } from '@films/infrastructure/repositories/http-films.repository';
import { HttpModule } from '@nestjs/axios';
import { FILMS_RESPOSITORY_KEY } from '@films/domain/films.constants';

@Module({
  imports: [HttpModule],
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
