import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { PeopleService } from '@people/application/services/people.service';
import { GetPaginatedPeopleUseCase } from '@people/application/use-cases/get-paginated-people.use-case';
import { GetPersonByIdUseCase } from '@people/application/use-cases/get-person-by-id.use-case';
import { PEOPLE_RESPOSITORY_KEY } from '@people/domain/people.constants';
import { GetPaginatedPeopleController } from '@people/infrastructure/controllers/get-paginated-people.controller';
import { GetPersonByIdController } from '@people/infrastructure/controllers/get-person-by-id.controller';
import { HTTPPeopleRepository } from '@people/infrastructure/repositories/http-people.repository';

@Module({
  imports: [
      HttpModule.register({
        maxRedirects: 3,
        timeout: 7 * 1000,
      }),
      CacheModule.register({
        ttl: 24 * 60 * 60 * 1000,
        max: 2000,
      }),
    ],
  controllers: [GetPaginatedPeopleController, GetPersonByIdController],
  providers: [
    {
      provide: PEOPLE_RESPOSITORY_KEY,
      useClass: HTTPPeopleRepository,
    },
    PeopleService,
    GetPersonByIdUseCase,
    GetPaginatedPeopleUseCase,
  ],
})
export class PeopleModule {}
