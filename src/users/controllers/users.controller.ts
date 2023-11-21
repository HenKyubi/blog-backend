// Libs
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

// Services
import { UsersService } from '../services/users.service';

// Dtos
import { CreateUserDto } from '../dtos/users.dtos';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  createUser(@Body() payload: CreateUserDto) {
    return this.usersService.createUser(payload);
  }

  @Get()
  getUsers() {
    return 'Users!.';
  }

  @Get(':userId')
  getUserById(@Param('userId', ParseIntPipe) userId: number) {
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
