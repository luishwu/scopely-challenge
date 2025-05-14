export interface EnvironmentVariables {
  environment: string;
  name: string;
  schema: string;
  host: string;
  port: number;
  player: {
    host: string;
    port: number;
  };
  battle: {
    host: string;
    port: number;
  };
}
