import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetFilmByIdDTO {
  @ApiPropertyOptional({
    description: 'ID of film',
    example: '1',
  })
  @IsString()
  id: number;
}
