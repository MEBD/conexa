import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetPersonByIdDTO {
  @ApiPropertyOptional({
    description: 'ID of person',
    example: '1',
  })
  @IsString()
  id: number;
}
