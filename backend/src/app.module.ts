import { CacheConfiguration } from '@application/infrastructure/cache/cache-configuration';
import { Configuration } from '@application/infrastructure/configuration/configutarion';
import { HTTPGetDataConfiguration } from '@application/infrastructure/http/http-get-data-configuration';
import { FilmsModule } from '@films/films.module';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PeopleModule } from '@people/people.module';
import { StarshipsModule } from '@starships/starships.module';
import { PlanetsModule } from './modules/planets/planets.module';

@Module({
  imports: [
    ConfigModule.forRoot(Configuration),
    HttpModule.register(HTTPGetDataConfiguration),
    CacheModule.register(CacheConfiguration),
    // Modules
    FilmsModule,
    PeopleModule,
    PlanetsModule,
    StarshipsModule,
  ],
})
export class AppModule {}
