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
    userId: string,
    postId: string,
  ) {
    if (createCommentDto.content.trim().length === 0) {
      throw new BadRequestException(
        'El contenido del comentario no puede estar vacío',
      );
    }

    const comment = await this.commentModel.create({
      content: createCommentDto.content.trim(),
      author: userId,
      post: postId,
    });

    return this.commentModel
      .findById(comment._id)
      .populate('author', '-password -avatarPublicId');
  }

  findAll(postId: string) {
    return this.commentModel
      .find({ post: postId })
      .sort({ createdAt: 1 })
      .populate('author', '-password -avatarPublicId');
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    void updateCommentDto;
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
