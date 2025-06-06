import * as Joi from 'joi';

export const envSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development').required(),
  APP_NAME: Joi.string().required(),
  API_GATEWAY_SCHEMA: Joi.string().required(),
  API_GATEWAY_HOST: Joi.string().required(),
  API_GATEWAY_PORT: Joi.number().required(),
  PLAYER_SERVICE_HOST: Joi.string().required(),
  PLAYER_SERVICE_PORT: Joi.number().required(),
  BATTLE_SERVICE_HOST: Joi.string().required(),
  BATTLE_SERVICE_PORT: Joi.number().required(),
});
