import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Post } from './entities/post.entity';
import { Comment } from '../comments/entities/comment.entity';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { UserRole } from '../users/enums/user-role.enum';

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

  async getAll(page: number, limit: number, order: string = 'recent') {
    const minPage = Math.max(page, 1);
    const maxPosts = Math.min(Math.max(limit, 1), 50);
    const skip = (minPage - 1) * maxPosts;

    if (order === 'likes') {
      const [data, total] = await Promise.all([
        this.postModel.aggregate([
          {
            $addFields: {
              likesCount: { $size: { $ifNull: ['$likes', []] } },
            },
          },
          { $sort: { likesCount: -1, createdAt: -1 } },
          { $skip: skip },
          { $limit: maxPosts },
          { $project: { imagePublicId: 0, likesCount: 0 } },
        ]),
        this.postModel.countDocuments(),
      ]);

      await this.postModel.populate(data, {
        path: 'author',
        select: '-password -avatarPublicId',
      });

      return {
        data,
        page: minPage,
        limit: maxPosts,
        total,
        hasMore: skip + data.length < total,
      };
    }

    const [data, total] = await Promise.all([
      this.postModel
        .find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(maxPosts)
        .select('-imagePublicId')
        .populate('author', '-password -avatarPublicId')
        .lean(),
      this.postModel.countDocuments(),
    ]);

    return {
      data,
      page: minPage,
      limit: maxPosts,
      total,
      hasMore: skip + data.length < total,
    };
  }

  async findOne(id: string) {
    const post = await this.postModel
      .findById(id)
      .select('-imagePublicId')
      .populate('author', '-password -avatarPublicId');
    if (!post) {
      throw new NotFoundException('Post no encontrado');
    }

    return { post };
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

  async remove(id: string, userId: string, userRole: UserRole) {
    const post = await this.postModel.findById(id).select('+imagePublicId');

    if (!post) {
      throw new NotFoundException('Post no encontrado');
    }

    const isOwner = post.author.toString() === userId;
    const isAdmin = userRole === UserRole.ADMIN;

    if (!isOwner && !isAdmin) {
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

  async update(
    id: string,
    updatePostDto: UpdatePostDto,
    userId: string,
    userRole: UserRole,
  ) {
    const post = await this.postModel.findById(id);

    if (!post) {
      throw new NotFoundException('Post no encontrado');
    }

    const isOwner = post.author.toString() === userId;
    const isAdmin = userRole === UserRole.ADMIN;

    if (!isOwner && !isAdmin) {
      throw new ForbiddenException(
        'No tenes permiso para editar esta publicacion',
      );
    }

    const content = updatePostDto.content?.trim();

    if (!content) {
      throw new BadRequestException('El contenido no puede estar vacio');
    }

    post.content = content;
    await post.save();

    return this.postModel
      .findById(post._id)
      .select('-imagePublicId')
      .populate('author', '-password -avatarPublicId')
      .lean();
  }

  // remove(id: number) {
  //   return `This action removes a #${id} post`;
  // }
}
