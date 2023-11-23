// Libs
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Dtos
import { CreatePostDto, UpdatePostDto } from '../dtos/posts.dto';

// Entities
import { Post } from '../entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  async create(payload: CreatePostDto) {
    const newUser = this.postRepository.create(payload);
    return await this.postRepository.save(newUser);
  }

  async findAll() {
    return await this.postRepository.find();
  }

  async findOne(id: number) {
    return await this.postRepository.findOneBy({
      id,
    });
  }

  async update(id: number, payload: UpdatePostDto) {
    return await this.postRepository.update({ id }, payload);
  }

  async remove(id: number) {
    return await this.postRepository.delete({ id });
  }
}
