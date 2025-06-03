import { Controller, Get, Query } from '@nestjs/common';
import { GetPaginatedPeopleDTO } from './get-paginated-people.dto';
import { ApiTags } from '@nestjs/swagger';
import { PaginatedPeople } from '@people/domain/paginated-people.entity';
import { PAGINATED_PEOPLE_DEFAULT_PAGE } from '@people/domain/people.constants';
import { GetPaginatedPeopleUseCase } from '@people/application/use-cases/get-paginated-people.use-case';

@ApiTags('People')
@Controller('/people')
export class GetPaginatedPeopleController {
  constructor(private readonly useCase: GetPaginatedPeopleUseCase) {}

  @Get('/')
  async run(@Query() query: GetPaginatedPeopleDTO): Promise<PaginatedPeople> {
    return await this.useCase.run(query.page ?? PAGINATED_PEOPLE_DEFAULT_PAGE);
  }
}
