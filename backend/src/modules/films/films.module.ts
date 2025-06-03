import { FilmsService } from '@films/application/services/films.service';
import { GetFilmByIdUseCase } from '@films/application/use-cases/get-film-by-id.use-case';
import { GetPaginatedFilmsUseCase } from '@films/application/use-cases/get-paginated-films.use-case';
import { FILMS_RESPOSITORY_KEY } from '@films/domain/films.constants';
import { GetFilmByIdController } from '@films/infrastructure/controllers/get-film-by-id.controller';
import { GetPaginatedFilmsController } from '@films/infrastructure/controllers/get-paginated-films.controller';
import { HTTPFilmsRepository } from '@films/infrastructure/repositories/http-films.repository';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';

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
