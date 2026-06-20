import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @MaxLength(200)
  @MinLength(2)
  content!: string;
}
