import { Controller, Get, Query } from '@nestjs/common';
import { GetPaginatedPlanetsDTO } from './get-paginated-planets.dto';
import { ApiTags } from '@nestjs/swagger';
import { GetPaginatedPlanetsUseCase } from '@planets/application/use-cases/get-paginated-planets.use-case';
import { PaginatedPlanets } from '@planets/domain/paginated-planets.entity';
import { PAGINATED_PLANETS_DEFAULT_PAGE } from '@planets/domain/planets.constants';

@ApiTags('Planets')
@Controller('/planets')
export class GetPaginatedPlanetsController {
  constructor(private readonly useCase: GetPaginatedPlanetsUseCase) {}

  @Get('/')
  async run(@Query() query: GetPaginatedPlanetsDTO): Promise<PaginatedPlanets> {
    return await this.useCase.run(query.page ?? PAGINATED_PLANETS_DEFAULT_PAGE);
  }
}
