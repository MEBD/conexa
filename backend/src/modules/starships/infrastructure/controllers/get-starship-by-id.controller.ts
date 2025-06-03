import { Controller, Get, Param } from '@nestjs/common';
import { GetStarshipByIdUseCase } from '@starships/application/use-cases/get-starship-by-id.use-case';
import { GetStarshipByIdDTO } from '@starships/infrastructure/controllers/get-starship-by-id.dto';
import { ApiTags } from '@nestjs/swagger';
import { Starship } from '@starships/domain/starship.entity';

@ApiTags('Starships')
@Controller('/starships')
export class GetStarshipByIdController {
  constructor(private readonly useCase: GetStarshipByIdUseCase) {}

  @Get('/:id')
  async run(@Param() params: GetStarshipByIdDTO): Promise<Starship> {
    return await this.useCase.run(params.id);
  }
}
