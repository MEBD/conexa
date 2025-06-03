import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetStarshipByIdDTO {
  @ApiPropertyOptional({
    description: 'ID of starship',
    example: '1',
  })
  @IsString()
  id: number;
}
