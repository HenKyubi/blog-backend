// Libs
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Dtos
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';

// Entities
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  createUser(payload: CreateUserDto) {
    const newUser = this.userRepository.create(payload);
    return this.userRepository.save(newUser);
  }

  findAllUsers() {
    return this.userRepository.find();
  }

  findOneUserById(userId: number) {
    return this.userRepository.findOneBy({
      id: userId,
    });
  }

  updateUser(userId: number, payload: UpdateUserDto) {
    return this.userRepository.update({ id: userId }, payload);
  }

  deleteUser(userId: number) {
    return this.userRepository.delete({ id: userId });
  }
}
