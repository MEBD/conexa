import { Inject, Injectable } from '@nestjs/common';
import { PeopleService } from '@people/application/services/people.service';
import { PaginatedPeople } from '@people/domain/paginated-people.entity';

@Injectable()
export class GetPaginatedPeopleUseCase {
  constructor(@Inject(PeopleService) private readonly service: PeopleService) {}

  async run(page?: string): Promise<PaginatedPeople> {
    return await this.service.getPaginatedPeople(page);
  }
}
