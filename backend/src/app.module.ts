import { FilmsModule } from '@films/films.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PeopleModule } from '@people/people.module';
import { StarshipsModule } from '@starships/starships.module';
import { JoiValidateConfigurationSchema } from './modules/application/infrastructure/configuration/joi-validate-configuration.schema';
import { PlanetsModule } from './modules/planets/planets.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: JoiValidateConfigurationSchema,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
    // Modules
    FilmsModule,
    PeopleModule,
    PlanetsModule,
    StarshipsModule,
  ],
})
export class AppModule {}
