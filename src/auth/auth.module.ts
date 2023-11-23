// Libs
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

// Modules
import { UsersModule } from 'src/users/users.module';

// Controllers
import { AuthController } from './controllers/auth.controller';

// Services
import { AuthService } from './services/auth.service';

// Strategies
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [UsersModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
