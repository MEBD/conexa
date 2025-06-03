import { HttpModuleOptions } from '@nestjs/axios';

export const HTTPGetDataConfiguration: HttpModuleOptions = {
  global: true,
  maxRedirects: 3,
  timeout: 7 * 1000,
};
