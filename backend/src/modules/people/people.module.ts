import { Module } from '@nestjs/common';
import { GetPaginatedPeopleController } from '@people/infrastructure/controllers/get-paginated-people.controller';
import { GetPersonByIdController } from '@people/infrastructure/controllers/get-person-by-id.controller';
import { PeopleService } from '@people/application/services/people.service';
import { GetPersonByIdUseCase } from '@people/application/use-cases/get-person-by-id.use-case';
import { GetPaginatedPeopleUseCase } from '@people/application/use-cases/get-paginated-people.use-case';
import { HTTPPeopleRepository } from '@people/infrastructure/repositories/http-people.repository';
import { HttpModule } from '@nestjs/axios';
import { PEOPLE_RESPOSITORY_KEY } from '@people/domain/people.constants';

@Module({
  imports: [HttpModule],
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
