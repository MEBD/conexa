import { Controller, Get, Query } from '@nestjs/common';
import { GetPaginatedStarshipsDTO } from './get-paginated-starships.dto';
import { ApiTags } from '@nestjs/swagger';
import { GetPaginatedStarshipsUseCase } from '@starships/application/use-cases/get-paginated-starships.use-case';
import { PaginatedStarships } from '@starships/domain/paginated-starships.entity';
import { PAGINATED_STARSHIPS_DEFAULT_PAGE } from '@starships/domain/starships.constants';

@ApiTags('Starships')
@Controller('/starships')
export class GetPaginatedStarshipsController {
  constructor(private readonly useCase: GetPaginatedStarshipsUseCase) {}

  @Get('/')
  async run(
    @Query() query: GetPaginatedStarshipsDTO,
  ): Promise<PaginatedStarships> {
    return await this.useCase.run(
      query.page ?? PAGINATED_STARSHIPS_DEFAULT_PAGE,
    );
  }
}
