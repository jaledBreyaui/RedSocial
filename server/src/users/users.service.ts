import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { AdminCreateUserDto } from './dto/admin-create-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserRole } from './enums/user-role.enum';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

type CreateUserData = CreateUserDto & {
  avatarPublicId?: string;
};

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async getUsers() {
    return this.userModel
      .find()
      .select('-password -avatarPublicId')
      .sort({ name: 1, lastName: 1 });
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({
      email: email.trim().toLowerCase(),
    });
  }

  async create(userData: CreateUserData): Promise<void> {
    await this.userModel.create(userData);
  }

  async createFromAdmin(
    userData: AdminCreateUserDto,
    avatar?: Express.Multer.File,
  ) {
    const email = userData.email.trim().toLowerCase();
    const userExists = await this.findByEmail(email);

    if (userExists) {
      throw new ConflictException('El email ya esta registrado');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 12);
    const uploadedAvatar = avatar
      ? await this.cloudinaryService.uploadImage(avatar, 'avatars')
      : undefined;

    let createdUserId = '';

    try {
      const createdUser = await this.userModel.create({
        ...userData,
        email,
        password: hashedPassword,
        role: userData.role ?? UserRole.USER,
        avatarURL: uploadedAvatar?.url,
        avatarPublicId: uploadedAvatar?.publicId,
      });
      createdUserId = createdUser.id;
    } catch (error) {
      await this.cloudinaryService.deleteImage(uploadedAvatar?.publicId);
      throw error;
    }

    return this.userModel
      .findById(createdUserId)
      .select('-password -avatarPublicId');
  }

  async updateSuspension(
    id: string,
    isSuspended: boolean,
    currentUserId: string,
  ) {
    if (id === currentUserId && isSuspended) {
      throw new BadRequestException('No podes suspender tu propio usuario');
    }

    const user = await this.userModel
      .findByIdAndUpdate(
        id,
        { isSuspended },
        { new: true },
      )
      .select('-password -avatarPublicId');

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return user;
  }

  async findPublicById(id: string) {
    const user = await this.userModel
      .findById(id)
      .select('-password -avatarPublicId');

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return user;
  }
}
