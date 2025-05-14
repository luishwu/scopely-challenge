import { EnvironmentVariables } from './env.variables';

export const configuration = (): EnvironmentVariables => ({
  environment: process.env.NODE_ENV || 'development',
  name: process.env.APP_NAME || 'api-gateway',
  schema: process.env.API_GATEWAY_SCHEMA || 'http',
  host: process.env.API_GATEWAY_HOST || 'localhost',
  port: +process.env.API_GATEWAY_PORT!,
  player: {
    host: process.env.PLAYER_SERVICE_HOST || 'localhost',
    port: +process.env.PLAYER_SERVICE_PORT!,
  },
  battle: {
    host: process.env.BATTLE_SERVICE_HOST || 'localhost',
    port: +process.env.BATTLE_SERVICE_PORT!,
  }
});
