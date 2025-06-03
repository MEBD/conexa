import { Inject, Injectable } from '@nestjs/common';
import { PeopleService } from '@people/application/services/people.service';
import { Person } from '@people/domain/person.entity';

@Injectable()
export class GetPersonByIdUseCase {
  constructor(
    @Inject(PeopleService) private readonly service: PeopleService,
  ) {}

  async run(id: number): Promise<Person> {
    return await this.service.getPersonById(id);
  }
}
