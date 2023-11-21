import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsString()
  @IsOptional()
  photo?: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
