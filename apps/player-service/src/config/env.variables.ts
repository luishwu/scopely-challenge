export interface EnvironmentVariables {
  environment: string;
  name: string;
  port: number;
  player: {
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
}
