import * as Joi from 'joi';

export const envSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development').required(),
  APP_NAME: Joi.string().required(),
  PORT: Joi.number().required(),
  PLAYER_SERVICE_HOST: Joi.string().required(),
  PLAYER_SERVICE_PORT: Joi.number().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_DB: Joi.string().required(),
  DATABASE_USER: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
});
