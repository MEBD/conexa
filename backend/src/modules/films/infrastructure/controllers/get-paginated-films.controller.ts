import { GetPaginatedFilmsUseCase } from '@films/application/use-cases/get-paginated-films.use-case';
import { PAGINATED_FILMS_DEFAULT_PAGE } from '@films/domain/films.constants';
import { PaginatedFilms } from '@films/domain/paginated-films.entity';
import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetPaginatedFilmsDTO } from './get-paginated-films.dto';

@ApiTags('Films')
@Controller('/films')
export class GetPaginatedFilmsController {
  constructor(private readonly useCase: GetPaginatedFilmsUseCase) {}

  @Get('/')
  async run(@Query() query: GetPaginatedFilmsDTO): Promise<PaginatedFilms> {
    return await this.useCase.run(query.page ?? PAGINATED_FILMS_DEFAULT_PAGE);
  }
}
