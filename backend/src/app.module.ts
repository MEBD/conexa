import { Module } from '@nestjs/common';
import { PlanetsModule } from './modules/planets/planets.module';
import { ConfigModule } from '@nestjs/config';
import { JoiValidateConfigurationSchema } from './modules/application/infrastructure/configuration/joi-validate-configuration.schema';
import { FilmsModule } from '@films/films.module';
import { PeopleModule } from '@people/people.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: JoiValidateConfigurationSchema,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
    // Modules
    PlanetsModule,
    FilmsModule,
    PeopleModule,
  ],
})
export class AppModule {}
