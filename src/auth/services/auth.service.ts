// Libs
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { instanceToPlain } from 'class-transformer';
import { User } from 'src/users/entities/user.entity';

// Services
import { UsersService } from 'src/users/services/users.service';

// Utils
import { verifyHash } from 'src/utils/bcrypt.handle';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(phrase: string, password: string) {
    const user = await this.usersService.findUserByUsername(phrase);

    if (!!user) {
      const isMatch = await verifyHash(password, user.password);
      if (isMatch) {
        const transformedUser = instanceToPlain(user);

        return transformedUser;
      }
    }

    return null;
  }

  generateJWT(user: User) {
    const payload = {
      role: user.role,
      sub: user.username,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
