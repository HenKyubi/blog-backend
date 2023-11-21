import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';

@Injectable()
export class UsersService {
  createUser(payload: CreateUserDto) {
    return `User created!: ${payload}`;
  }

  findAllUsers() {
    return 'All users []';
  }

  findOneUserByUserName(userId: number) {
    return `User ${userId}`;
  }

  updateUser(userId: number, payload: UpdateUserDto) {
    return `User ${userId} Updated: ${payload}`;
  }

  deleteUser(userId: number) {
    return `Delete User ${userId}`;
  }
}
