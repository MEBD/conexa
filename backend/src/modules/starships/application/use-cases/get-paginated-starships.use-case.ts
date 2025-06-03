import { Inject, Injectable } from '@nestjs/common';
import { StarshipsService } from '@starships/application/services/starships.service';
import { PaginatedStarships } from '@starships/domain/paginated-starships.entity';

@Injectable()
export class GetPaginatedStarshipsUseCase {
  constructor(
    @Inject(StarshipsService) private readonly service: StarshipsService,
  ) {}

  async run(page?: string): Promise<PaginatedStarships> {
    return await this.service.getPaginatedStarships(page);
  }
}
