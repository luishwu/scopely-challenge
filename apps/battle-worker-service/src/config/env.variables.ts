export interface EnvironmentVariables {
  environment: string;
  name: string;
  port: number;
  battleworker: {
    host: string;
    port: number;
  };
}
