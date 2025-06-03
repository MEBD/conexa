import * as Joi from 'joi';

export const JoiValidateConfigurationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  VERSION: Joi.string().required().min(8),
  PORT: Joi.number().default(3333),
  DOCUMENTATION_TITLE: Joi.string().required(),
  DOCUMENTATION_DESCRIPTION: Joi.string().required(),
  DOCUMENTATION_PATH: Joi.string().required(),
  STAR_WARS_API: Joi.string().required().uri(),
});
