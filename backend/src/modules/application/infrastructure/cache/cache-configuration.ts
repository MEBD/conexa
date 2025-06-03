import { CacheModuleOptions } from '@nestjs/cache-manager';

export const CacheConfiguration: CacheModuleOptions = {
  isGlobal: true,
  ttl: 24 * 60 * 60 * 1000,
  max: 2000,
};
