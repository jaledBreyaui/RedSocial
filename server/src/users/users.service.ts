import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import bcrypt from 'bcryptjs';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getUsers() {
    return this.userModel.find().select('-password');
  }

  async createUser(
    dto: CreateUserDto,
    avatar?: Express.Multer.File,
  ): Promise<void> {
    const email = dto.email.trim().toLowerCase();
    const userExists = await this.userModel.exists({ email });

    if (userExists) {
      throw new ConflictException('El email ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 12);
    const avatarURL = avatar
      ? `/uploads/avatars/${avatar.filename}`
      : undefined;

    await this.userModel.create({
      ...dto,
      email,
      password: hashedPassword,
      avatarURL,
    });
  }

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({
      email: email.trim().toLowerCase(),
    });

    if (!user) {
      throw new ConflictException('Credenciales inválidas');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new ConflictException('Credenciales inválidas');
    }

    return {
      id: user._id,
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      avatarURL: user.avatarURL,
    };
  }
}
