import { Controller, Post, Get, Param, Put, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  createUser() {
    return 'User created!.';
  }

  @Get()
  getUsers() {
    return 'Users!.';
  }

  @Get(':userId')
  getUserById(@Param('userId') userId: string) {
    return `User ${userId}`;
  }

  @Put(':userId')
  updateUser(@Param('userId') userId: string) {
    return `Update User ${userId}`;
  }

  @Delete(':userId')
  deleteUser(@Param('userId') userId: string) {
    return `Delete User ${userId}`;
  }
}
