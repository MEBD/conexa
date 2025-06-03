import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetPaginatedPeopleUseCase } from '@people/application/use-cases/get-paginated-people.use-case';
import { PaginatedPeople } from '@people/domain/paginated-people.entity';
import { PAGINATED_PEOPLE_DEFAULT_PAGE } from '@people/domain/people.constants';
import { GetPaginatedPeopleDTO } from './get-paginated-people.dto';

@ApiTags('People')
@Controller('/people')
export class GetPaginatedPeopleController {
  constructor(private readonly useCase: GetPaginatedPeopleUseCase) {}

  @Get('/')
  async run(@Query() query: GetPaginatedPeopleDTO): Promise<PaginatedPeople> {
    return await this.useCase.run(query.page ?? PAGINATED_PEOPLE_DEFAULT_PAGE);
  }
}
