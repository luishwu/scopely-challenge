import * as Joi from 'joi';

export const envSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development').required(),
  APP_NAME: Joi.string().required(),
  PORT: Joi.number().required(),
  BATTLE_WORKER_SERVICE_HOST: Joi.string().required(),
  BATTLE_WORKER_SERVICE_PORT: Joi.number().required(),
});
