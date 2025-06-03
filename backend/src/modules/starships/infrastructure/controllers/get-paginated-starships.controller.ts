import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetPaginatedStarshipsUseCase } from '@starships/application/use-cases/get-paginated-starships.use-case';
import { PaginatedStarships } from '@starships/domain/paginated-starships.entity';
import { PAGINATED_STARSHIPS_DEFAULT_PAGE } from '@starships/domain/starships.constants';
import { GetPaginatedStarshipsDTO } from '@starships/infrastructure/controllers/get-paginated-starships.dto';

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
