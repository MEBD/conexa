import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetPlanetByIdUseCase } from '@planets/application/use-cases/get-planet-by-id.use-case';
import { Planet } from '@planets/domain/planet.entity';
import { GetPlanetByIdDTO } from '@planets/infrastructure/controllers/get-planet-by-id.dto';

@ApiTags('Planets')
@Controller('/planets')
export class GetPlanetByIdController {
  constructor(private readonly useCase: GetPlanetByIdUseCase) {}

  @Get('/:id')
  async run(@Param() params: GetPlanetByIdDTO): Promise<Planet> {
    return await this.useCase.run(params.id);
  }
}
