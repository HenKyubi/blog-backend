// Libs
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Utils
import { environments } from 'environments';

// Modules
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
    }),
    UsersModule,
    DatabaseModule,
  ],
})
export class AppModule {}
