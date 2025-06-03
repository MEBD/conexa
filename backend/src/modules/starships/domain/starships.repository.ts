import { PaginatedStarships } from '@starships/domain/paginated-starships.entity';
import { Starship } from '@starships/domain/starship.entity';

export interface StarshipsRepository {
  getPaginatedStarships(page?: string): Promise<PaginatedStarships>;
  getStarshipById(is: number): Promise<Starship>;
}
