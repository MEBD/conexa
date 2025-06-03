import { Inject, Injectable } from '@nestjs/common';
import { PaginatedFilms } from '@films/domain/paginated-films.entity';
import { FilmsService } from '@films/application/services/films.service';

@Injectable()
export class GetPaginatedFilmsUseCase {
  constructor(@Inject(FilmsService) private readonly service: FilmsService) {}

  async run(page?: string): Promise<PaginatedFilms> {
    return await this.service.getPaginatedFilms(page);
  }
}
