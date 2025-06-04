import { CORS } from '@application/infrastructure/cors/cors';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApplicationConfiguration } from './modules/application/domain/application-configuration';
import { SwaggerDocumentation } from './modules/application/infrastructure/documentation/swagger-documentation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService<ApplicationConfiguration>);

  new SwaggerDocumentation(
    app,
    config.get<string>('VERSION')!,
    config.get<string>('DOCUMENTATION_PATH')!,
    config.get<string>('DOCUMENTATION_TITLE')!,
    config.get<string>('DOCUMENTATION_DESCRIPTION')!,
  );

  new CORS(
    app,
    config.get<string>('CORS_ORIGIN')!,
    config.get<string>('CORS_METHODS')!,
    config.get<boolean>('CORS_CREDENTIALS')!,
  );

  await app.listen(config.get<number>('PORT')!);
}

bootstrap().then(
  () => {},
  (error) => console.error(`Application can't start: ${error}`),
);
