import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetPlanetByIdDTO {
  @ApiPropertyOptional({
    description: 'ID of planet',
    example: '1',
  })
  @IsString()
  id: number;
}
