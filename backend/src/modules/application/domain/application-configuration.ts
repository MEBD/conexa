export interface ApplicationConfiguration {
  NODE_ENV: 'development' | 'production' | 'test';
  VERSION: string;
  PORT: number;

  DOCUMENTATION_TITLE: string;
  DOCUMENTATION_DESCRIPTION: string;
  DOCUMENTATION_PATH: string;

  STAR_WARS_API: string;

  CORS_ORIGIN: string;
  CORS_METHODS: string;
  CORS_CREDENTIALS: boolean;
}
