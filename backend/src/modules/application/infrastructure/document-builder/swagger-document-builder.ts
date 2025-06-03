import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerDocumentBuilder {
  constructor(
    private readonly app: INestApplication<any>,
    private readonly version: string,
    private readonly path: string,
    private readonly title: string,
    private readonly description: string,
  ) {}

  build(): void {
    const config = new DocumentBuilder()
      .setTitle(this.title)
      .setDescription(this.description)
      .setVersion(this.version)
      .build();

    const document = SwaggerModule.createDocument(this.app, config);
    SwaggerModule.setup(this.path, this.app, document);
  }
}
