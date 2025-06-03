import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PeopleService } from '@people/application/services/people.service';
import { GetPaginatedPeopleUseCase } from '@people/application/use-cases/get-paginated-people.use-case';
import { GetPersonByIdUseCase } from '@people/application/use-cases/get-person-by-id.use-case';
import { PEOPLE_RESPOSITORY_KEY } from '@people/domain/people.constants';
import { GetPaginatedPeopleController } from '@people/infrastructure/controllers/get-paginated-people.controller';
import { GetPersonByIdController } from '@people/infrastructure/controllers/get-person-by-id.controller';
import { HTTPPeopleRepository } from '@people/infrastructure/repositories/http-people.repository';

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
