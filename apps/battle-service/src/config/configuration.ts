import { EnvironmentVariables } from './env.variables';

export const configuration = (): EnvironmentVariables => ({
  environment: process.env.NODE_ENV || 'development',
  name: process.env.APP_NAME || 'battle-service',
  port: +process.env.PORT!,
  battle: {
    host: process.env.BATTLE_SERVICE_HOST || 'localhost',
    port: +process.env.BATTLE_SERVICE_PORT!,
  },
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: +process.env.DATABASE_PORT!,
    db: process.env.DATABASE_DB || 'battle-database',
    user: process.env.DATABASE_USER || 'admin',
    password: process.env.DATABASE_PASSWORD || 'admin',
  },
  rabbitmq: {
    host: process.env.RABBITMQ_HOST || 'localhost',
    port: +process.env.RABBITMQ_PORT!,
    user: process.env.RABBITMQ_USER || 'admin',
    password: process.env.RABBITMQ_PASSWORD || 'admin',
  }
});
