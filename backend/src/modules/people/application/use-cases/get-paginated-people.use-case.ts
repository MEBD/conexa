import { Inject, Injectable } from '@nestjs/common';
import { PaginatedPeople } from '@people/domain/paginated-people.entity';
import { PeopleService } from '@people/application/services/people.service';

@Injectable()
export class GetPaginatedPeopleUseCase {
  constructor(@Inject(PeopleService) private readonly service: PeopleService) {}

  async run(page?: string): Promise<PaginatedPeople> {
    return await this.service.getPaginatedPeople(page);
  }
}
