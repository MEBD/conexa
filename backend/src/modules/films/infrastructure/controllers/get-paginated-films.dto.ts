import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetPaginatedFilmsDTO {
  @ApiPropertyOptional({
    description: 'Number of page',
    example: '1',
  })
  @IsOptional()
  @IsString()
  page?: string;
}
