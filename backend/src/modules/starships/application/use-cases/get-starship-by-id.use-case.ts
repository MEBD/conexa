import { Inject, Injectable } from '@nestjs/common';
import { StarshipsService } from '@starships/application/services/starships.service';
import { Starship } from '@starships/domain/starship.entity';

@Injectable()
export class GetStarshipByIdUseCase {
  constructor(
    @Inject(StarshipsService) private readonly service: StarshipsService,
  ) {}

  async run(id: number): Promise<Starship> {
    return await this.service.getStarshipById(id);
  }
}
