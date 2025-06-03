import { ApplicationConfiguration } from '@application/domain/application-configuration';
import { HTTPGetData } from '@application/infrastructure/http/http-get-data';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PaginatedPeople } from '@people/domain/paginated-people.entity';
import { PeopleRepository } from '@people/domain/people.repository';
import { Person } from '@people/domain/person.entity';
import {
  PaginatedPeopleRaw,
  getPaginatedPeopleAdapter,
} from '@people/infrastructure/repositories/adapters/get-paginated-people.adapter';
import {
  PersonByIdRaw,
  getPersonByIdAdapter,
} from '@people/infrastructure/repositories/adapters/get-person-by-id.adapter';

@Injectable()
export class HTTPPeopleRepository implements PeopleRepository {
  private baseURL: string;

  constructor(
    private readonly config: ConfigService<ApplicationConfiguration>,
    private readonly httpService: HttpService,
  ) {
    this.baseURL = this.config.get<string>('STAR_WARS_API')!;
  }

  async getPaginatedPeople(page: string): Promise<PaginatedPeople> {
    return HTTPGetData<PaginatedPeopleRaw, PaginatedPeople>({
      service: this.httpService,
      url: `${this.baseURL}/people?page=${page}`,
      adapter: getPaginatedPeopleAdapter,
    });
  }

  async getPersonById(id: number): Promise<Person> {
    return HTTPGetData<PersonByIdRaw, Person>({
      service: this.httpService,
      url: `${this.baseURL}/people/${id}`,
      adapter: getPersonByIdAdapter,
    });
  }
}
