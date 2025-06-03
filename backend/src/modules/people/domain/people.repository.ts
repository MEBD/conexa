import { Person } from '@people/domain/person.entity';
import { PaginatedPeople } from '@people/domain/paginated-people.entity';

export interface PeopleRepository {
  getPaginatedPeople(page?: string): Promise<PaginatedPeople>;
  getPersonById(is: number): Promise<Person>;
}
