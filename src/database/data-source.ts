// Libs
import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { environments } from 'src/environments';

dotenv.config({ path: environments[process.env.NODE_ENV] || '.env' });

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: !!process.env.DB_SYNCHRONIZE,
  logging: true,
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
};

export const AppDataSource = new DataSource(dataSourceOptions);
