import { FilmsService } from '@films/application/services/films.service';
import { Film } from '@films/domain/film.entity';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class GetFilmByIdUseCase {
  constructor(@Inject(FilmsService) private readonly service: FilmsService) {}

  async run(id: number): Promise<Film> {
    return await this.service.getFilmById(id);
  }
}
