import { Controller, Get, Param } from '@nestjs/common';
import { GetPersonByIdDTO } from '@people/infrastructure/controllers/get-person-by-id.dto';
import { GetPersonByIdUseCase } from '@people/application/use-cases/get-person-by-id.use-case';
import { ApiTags } from '@nestjs/swagger';
import { Person } from '@people/domain/person.entity';

@ApiTags('People')
@Controller('/people')
export class GetPersonByIdController {
  constructor(private readonly useCase: GetPersonByIdUseCase) {}

  @Get('/:id')
  async run(@Param() params: GetPersonByIdDTO): Promise<Person> {
    return await this.useCase.run(params.id);
  }
}
