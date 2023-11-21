// Libs
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

// Utils
import config from 'config';
import { environments } from 'environments';

// Modules
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        DB_NAME: Joi.string().required(),
        DB_PORT: Joi.number().required().positive(),
      }),
    }),
    UsersModule,
    DatabaseModule,
  ],
})
export class AppModule {}
