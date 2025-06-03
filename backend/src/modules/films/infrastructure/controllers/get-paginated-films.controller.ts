import { Controller, Get, Query } from '@nestjs/common';
import { GetPaginatedFilmsDTO } from './get-paginated-films.dto';
import { ApiTags } from '@nestjs/swagger';
import { GetPaginatedFilmsUseCase } from '@films/application/use-cases/get-paginated-films.use-case';
import { PaginatedFilms } from '@films/domain/paginated-films.entity';
import { PAGINATED_FILMS_DEFAULT_PAGE } from '@films/domain/films.constants';

@ApiTags('Films')
@Controller('/films')
export class GetPaginatedFilmsController {
  constructor(private readonly useCase: GetPaginatedFilmsUseCase) {}

  @Get('/')
  async run(@Query() query: GetPaginatedFilmsDTO): Promise<PaginatedFilms> {
    return await this.useCase.run(query.page ?? PAGINATED_FILMS_DEFAULT_PAGE);
  }
}
