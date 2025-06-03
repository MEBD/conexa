import { Planet } from '@planets/domain/planet.entity';

export class PaginatedPlanets {
  constructor(
    public count: number,
    public next: number | null,
    public previous: number | null,
    public results: Planet[],
  ) {}
}
