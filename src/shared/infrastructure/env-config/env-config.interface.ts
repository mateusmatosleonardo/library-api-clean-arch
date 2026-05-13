export interface EnvConfig {
  getPort(): number;
  getNodeEnv(): string;
  getDatabaseUrl(): string;
}
