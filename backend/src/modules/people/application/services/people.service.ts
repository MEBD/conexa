import { Inject, Injectable } from '@nestjs/common';
import { PaginatedPeople } from '@people/domain/paginated-people.entity';
import { PEOPLE_RESPOSITORY_KEY } from '@people/domain/people.constants';
import { PeopleRepository } from '@people/domain/people.repository';
import { Person } from '@people/domain/person.entity';

@Injectable()
export class PeopleService {
  constructor(
    @Inject(PEOPLE_RESPOSITORY_KEY)
    private readonly repository: PeopleRepository,
  ) {}

  async getPersonById(id: number): Promise<Person> {
    return this.repository.getPersonById(id);
  }

  async getPaginatedPeople(page?: string): Promise<PaginatedPeople> {
    return this.repository.getPaginatedPeople(page);
  }
}
