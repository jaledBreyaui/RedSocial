import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
// import { UpdatePostDto } from './dto/update-post.dto';
import { BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './entities/post.entity';
import { Comment } from '../comments/entities/comment.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
    @InjectModel(Comment.name) private readonly commentModel: Model<Comment>,
  ) {}

  async create(
    createPostDto?: CreatePostDto,
    image?: Express.Multer.File,
    userId?: string,
  ): Promise<void> {
    if (!createPostDto && !image) {
      throw new BadRequestException(
        'Debe proporcionar contenido o una imagen para crear un post',
      );
    }

    const imageURL = image ? `/uploads/posts/${image.filename}` : undefined;
    await this.postModel.create({ ...createPostDto, imageURL, author: userId });
  }

  getAll() {
    return this.postModel.find().populate('author', '-password');
  }

  async findOne(id: string) {
    const post = await this.postModel
      .findById(id)
      .populate('author', '-password');
    if (!post) {
      throw new NotFoundException('Post no encontrado');
    }
    const comments = await this.commentModel
      .find({ post: id })
      .populate('author', '-password');

    return { post, comments };
  }

  // update(id: number, updatePostDto: UpdatePostDto) {
  //   return `This action updates a #${id} post`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} post`;
  // }
}
