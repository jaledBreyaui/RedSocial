import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async findAll(postId: string, page: number, limit: number) {
    const minPage = Math.max(page, 1);
    const maxPosts = Math.min(Math.max(limit, 1), 50);
    const skip = (minPage - 1) * maxPosts;
    const [data, total] = await Promise.all([
      this.commentModel
        .find({ post: postId })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(maxPosts)
        .populate('author', '-password -avatarPublicId')
        .lean(),
      this.commentModel.countDocuments({ post: postId }),
    ]);

    return {
      data,
      page: minPage,
      limit: maxPosts,
      total,
      hasMore: skip + data.length < total,
    };
  }

  async update(
    postId: string,
    id: string,
    updateCommentDto: UpdateCommentDto,
    userId: string,
  ) {
    const comment = await this.commentModel.findOne({ _id: id, post: postId });

    if (!comment) {
      throw new NotFoundException('Comentario no encontrado');
    }

    if (comment.author.toString() !== userId) {
      throw new ForbiddenException(
        'No tenes permiso para editar este comentario',
      );
    }

    const content = updateCommentDto.content?.trim();

    if (!content) {
      throw new BadRequestException(
        'El contenido del comentario no puede estar vacio',
      );
    }

    comment.content = content;
    await comment.save();

    return this.commentModel
      .findById(comment._id)
      .populate('author', '-password -avatarPublicId')
      .lean();
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
