import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerDocumentBuilder } from './modules/application/infrastructure/document-builder/swagger-document-builder';
import { ApplicationConfiguration } from './modules/application/domain/application-configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService<ApplicationConfiguration>);

  const swaggerBuilder = new SwaggerDocumentBuilder(
    app,
    config.get<string>('VERSION')!,
    config.get<string>('DOCUMENTATION_PATH')!,
    config.get<string>('DOCUMENTATION_TITLE')!,
    config.get<string>('DOCUMENTATION_DESCRIPTION')!,
  );
  swaggerBuilder.build();

  await app.listen(config.get<number>('PORT')!);
}

bootstrap().then(
  () => {},
  (error) => console.error(`Application can't start: ${error}`),
);
