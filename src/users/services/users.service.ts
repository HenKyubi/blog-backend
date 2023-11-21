import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/users.dtos';

@Injectable()
export class UsersService {
  createUser(payload: CreateUserDto) {
    return `User created!: ${payload}`;
  }

  findOneUserByUserName() {
    return '';
  }
}
