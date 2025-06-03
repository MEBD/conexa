import { Person } from '@people/domain/person.entity';

export class PaginatedPeople {
  constructor(
    public count: number,
    public next: number | null,
    public previous: number | null,
    public results: Person[],
  ) {}
}
