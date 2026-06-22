import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
// import { UpdatePostDto } from './dto/update-post.dto';
import { BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Post } from './entities/post.entity';
import { Comment } from '../comments/entities/comment.entity';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
    @InjectModel(Comment.name) private readonly commentModel: Model<Comment>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(
    createPostDto?: CreatePostDto,
    image?: Express.Multer.File,
    userId?: string,
  ) {
    if (!createPostDto?.content?.trim() && !image) {
      throw new BadRequestException(
        'Debe proporcionar contenido o una imagen para crear un post',
      );
    }

    const uploadedImage = image
      ? await this.cloudinaryService.uploadImage(image, 'posts')
      : undefined;

    try {
      const post = await this.postModel.create({
        ...createPostDto,
        content: createPostDto?.content?.trim(),
        imageURL: uploadedImage?.url,
        imagePublicId: uploadedImage?.publicId,
        author: userId,
      });

      const createdPost = await this.postModel
        .findById(post._id)
        .select('-imagePublicId')
        .populate('author', '-password -avatarPublicId')
        .lean();

      return createdPost;
    } catch (error) {
      await this.cloudinaryService.deleteImage(uploadedImage?.publicId);
      throw error;
    }
  }

  getAll() {
    return this.postModel
      .find()
      .sort({ createdAt: -1 })
      .select('-imagePublicId')
      .populate('author', '-password -avatarPublicId');
  }

  async findOne(id: string) {
    const post = await this.postModel
      .findById(id)
      .select('-imagePublicId')
      .populate('author', '-password -avatarPublicId');
    if (!post) {
      throw new NotFoundException('Post no encontrado');
    }
    const comments = await this.commentModel
      .find({ post: id })
      .populate('author', '-password');

    return { post, comments };
  }

  async toggleLike(id: string, userId: string) {
    const post = await this.postModel.findById(id);

    if (!post) {
      throw new NotFoundException('Post no encontrado');
    }

    const userObjectId = new Types.ObjectId(userId);
    const likeIndex = post.likes.findIndex(
      (likeId) => likeId.toString() === userId,
    );
    const liked = likeIndex === -1;

    if (liked) {
      post.likes.push(userObjectId);
    } else {
      post.likes.splice(likeIndex, 1);
    }

    await post.save();

    return {
      likes: post.likes.map((likeId) => likeId.toString()),
    };
  }

  async remove(id: string, userId: string) {
    const post = await this.postModel
      .findById(id)
      .select('+imagePublicId');

    if (!post) {
      throw new NotFoundException('Post no encontrado');
    }

    if (post.author.toString() !== userId) {
      throw new ForbiddenException(
        'No tenés permiso para eliminar esta publicación',
      );
    }

    await Promise.all([
      this.commentModel.deleteMany({ post: post._id }),
      this.postModel.deleteOne({ _id: post._id }),
    ]);

    await this.cloudinaryService.deleteImage(post.imagePublicId);

    return { deletedId: id };
  }

  // update(id: number, updatePostDto: UpdatePostDto) {
  //   return `This action updates a #${id} post`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} post`;
  // }
}
