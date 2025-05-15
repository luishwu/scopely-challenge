import { EnvironmentVariables } from './env.variables';

export const configuration = (): EnvironmentVariables => ({
  environment: process.env.NODE_ENV || 'development',
  name: process.env.APP_NAME || 'battle-worker-service',
  port: +process.env.PORT!,
  battleworker: {
    host: process.env.BATTLE_WORKER_SERVICE_HOST || 'localhost',
    port: +process.env.BATTLE_WORKER_SERVICE_PORT!,
  },
  rabbitmq: {
    host: process.env.RABBITMQ_HOST || 'localhost',
    port: +process.env.RABBITMQ_PORT!,
    user: process.env.RABBITMQ_USER || 'admin',
    password: process.env.RABBITMQ_PASSWORD || 'admin',
  }
});
