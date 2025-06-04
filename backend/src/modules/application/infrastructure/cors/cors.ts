import { INestApplication } from '@nestjs/common';

export class CORS {
  constructor(
    private readonly app: INestApplication<any>,
    private readonly origin: string,
    private readonly methods: string,
    private readonly credentials: boolean,
  ) {
    app.enableCors({
      origin: this.origin,
      methods: this.methods,
      credentials: this.credentials,
    });
  }
}
