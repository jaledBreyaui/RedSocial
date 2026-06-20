import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: Model<Comment>,
  ) {}

  async create(
    createCommentDto: CreateCommentDto,
    userId?: string,
    postId?: string,
  ): Promise<void> {
    if (createCommentDto.content.trim().length === 0) {
      throw new BadRequestException(
        'El contenido del comentario no puede estar vacío',
      );
    }

    await this.commentModel.create({
      ...createCommentDto,
      author: userId,
      post: postId,
    });
  }

  findAll() {
    return `This action returns all comments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    void updateCommentDto;
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
