// Libs
import { Injectable } from '@nestjs/common';

// Services
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}
}
