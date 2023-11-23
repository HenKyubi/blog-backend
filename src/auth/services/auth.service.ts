// Libs
import { Injectable } from '@nestjs/common';

// Services
import { UsersService } from 'src/users/services/users.service';

// Utils
import { verifyHash } from 'src/utils/bcrypt.handle';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(phrase: string, password: string) {
    const user = await this.usersService.findUserByUsername(phrase);

    const isMatch = await verifyHash(password, user.password);

    if (!!user && isMatch) {
      return user;
    }

    return null;
  }
}
