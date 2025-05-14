import { EnvironmentVariables } from './env.variables';

export const configuration = (): EnvironmentVariables => ({
  environment: process.env.NODE_ENV || 'development',
  name: process.env.APP_NAME || 'player-service',
  port: +process.env.PORT!,
  player: {
    host: process.env.PLAYER_SERVICE_HOST || 'localhost',
    port: +process.env.PLAYER_SERVICE_PORT!,
  },
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: +process.env.DATABASE_PORT!,
    db: process.env.DATABASE_DB || 'player-database',
    user: process.env.DATABASE_USER || 'admin',
    password: process.env.DATABASE_PASSWORD || 'admin',
  },
});
