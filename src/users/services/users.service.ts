// Libs
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Dtos
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';

// Entities
import { User } from '../entities/user.entity';
import { encrypt } from 'utils/bcrypt.handle';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(payload: CreateUserDto) {
    const newUser = this.userRepository.create(payload);

    const passwordHashed = await encrypt(payload.password);

    newUser.password = passwordHashed;

    return await this.userRepository.save(newUser);
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
