import { Inject, Injectable } from '@nestjs/common';
import { PaginatedStarships } from '@starships/domain/paginated-starships.entity';
import { Starship } from '@starships/domain/starship.entity';
import { STARSHIPS_RESPOSITORY_KEY } from '@starships/domain/starships.constants';
import { StarshipsRepository } from '@starships/domain/starships.repository';

@Injectable()
export class StarshipsService {
  constructor(
    @Inject(STARSHIPS_RESPOSITORY_KEY)
    private readonly repository: StarshipsRepository,
  ) {}

  async getStarshipById(id: number): Promise<Starship> {
    return this.repository.getStarshipById(id);
  }

  async getPaginatedStarships(page?: string): Promise<PaginatedStarships> {
    return this.repository.getPaginatedStarships(page);
  }
}
