import { GetFilmByIdUseCase } from '@films/application/use-cases/get-film-by-id.use-case';
import { Film } from '@films/domain/film.entity';
import { GetFilmByIdDTO } from '@films/infrastructure/controllers/get-film-by-id.dto';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Films')
@Controller('/films')
export class GetFilmByIdController {
  constructor(private readonly useCase: GetFilmByIdUseCase) {}

  @Get('/:id')
  async run(@Param() params: GetFilmByIdDTO): Promise<Film> {
    return await this.useCase.run(params.id);
  }
}
