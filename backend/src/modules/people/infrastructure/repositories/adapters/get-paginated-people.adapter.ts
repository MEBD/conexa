import { getPageFromURL } from '@application/infrastructure/adapters/get-page-from-url';
import { PaginatedPeople } from '@people/domain/paginated-people.entity';
import {
  getPersonByIdAdapter,
  PersonByIdRaw,
} from '@people/infrastructure/repositories/adapters/get-person-by-id.adapter';

export interface PaginatedPeopleRaw {
  count: number;
  next: string;
  previous: string;
  results: PersonByIdRaw[];
}

export const getPaginatedPeopleAdapter = (
  data: PaginatedPeopleRaw,
): PaginatedPeople => {
  return new PaginatedPeople(
    data.count,
    getPageFromURL(data.next),
    getPageFromURL(data.previous),
    data.results.map((item) => getPersonByIdAdapter(item)),
  );
};
