export interface EnvironmentVariables {
  environment: string;
  name: string;
  port: number;
  battle: {
    host: string;
    port: number;
  };
  database: {
    host: string;
    port: number;
    db: string;
    user: string;
    password: string;
  };
  rabbitmq: {
    host: string;
    port: number;
    user: string;
    password: string;
  };
}
