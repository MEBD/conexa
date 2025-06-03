import { JoiValidateConfigurationSchema } from '@application/infrastructure/configuration/joi-validate-configuration.schema';
import { ConfigModuleOptions } from '@nestjs/config';

export const Configuration: ConfigModuleOptions = {
  isGlobal: true,
  validationSchema: JoiValidateConfigurationSchema,
  envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
};
