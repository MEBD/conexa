import { ConfigModuleOptions } from '@nestjs/config';
import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  VERSION: Joi.string().required().min(8),
  PORT: Joi.number().default(3333),
  DOCUMENTATION_TITLE: Joi.string().required(),
  DOCUMENTATION_DESCRIPTION: Joi.string().required(),
  DOCUMENTATION_PATH: Joi.string().required(),
  STAR_WARS_API: Joi.string().required().uri(),
  CORS_ORIGIN: Joi.string().required().uri(),
  CORS_METHODS: Joi.string().required(),
  CORS_CREDENTIALS: Joi.boolean().required(),
});

export const Configuration: ConfigModuleOptions = {
  isGlobal: true,
  validationSchema: JoiValidationSchema,
  envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
};
