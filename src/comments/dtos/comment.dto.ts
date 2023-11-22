// Libs
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly comment: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly post: string;
}

export class UpdateCommentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly comment: string;
}
