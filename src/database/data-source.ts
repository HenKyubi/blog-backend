// Libs
import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

// Utils
import { environments } from 'src/environments';
import {
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_SYNCHRONIZE,
} from '../constants';

// Entities
import { User } from 'src/users/entities/user.entity';
import { Post } from 'src/posts/entities/post.entity';
import { Comment } from 'src/comments/entities/comment.entity';

dotenv.config({ path: environments[process.env.NODE_ENV] || '.env' });

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: DB_SYNCHRONIZE,
  entities: [User, Post, Comment],
  logging: true,
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
};

export const AppDataSource = new DataSource(dataSourceOptions);
