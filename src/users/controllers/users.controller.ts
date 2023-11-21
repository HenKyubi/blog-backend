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
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  createUser(@Body() payload: CreateUserDto) {
    return this.usersService.createUser(payload);
  }

  @Get()
  getUsers() {
    return this.usersService.findAllUsers();
  }

  @Get(':userId')
  getUserById(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.findOneUserByUserName(userId);
  }

  @Put(':userId')
  updateUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() payload: UpdateUserDto,
  ) {
    return this.usersService.updateUser(userId, payload);
  }

  @Delete(':userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.usersService.deleteUser(userId);
  }
}
