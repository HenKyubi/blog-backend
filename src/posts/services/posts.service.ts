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
  create(payload: CreatePostDto) {
    const newUser = this.postRepository.create(payload);
    return this.postRepository.save(newUser);
  }

  findAll() {
    return this.postRepository.find();
  }

  findOne(id: number) {
    return this.postRepository.findOneBy({
      id,
    });
  }

  update(id: number, payload: UpdatePostDto) {
    return this.postRepository.update({ id }, payload);
  }

  remove(id: number) {
    return this.postRepository.delete({ id });
  }
}
