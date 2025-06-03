import { Starship } from '@starships/domain/starship.entity';

export class PaginatedStarships {
  constructor(
    public count: number,
    public next: number | null,
    public previous: number | null,
    public results: Starship[],
  ) {}
}
