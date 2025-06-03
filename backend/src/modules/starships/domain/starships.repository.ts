import { Starship } from '@starships/domain/starship.entity';
import { PaginatedStarships } from '@starships/domain/paginated-starships.entity';

export interface StarshipsRepository {
  getPaginatedStarships(page?: string): Promise<PaginatedStarships>;
  getStarshipById(is: number): Promise<Starship>;
}
