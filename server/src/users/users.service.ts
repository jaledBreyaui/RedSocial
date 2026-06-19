import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcryptjs';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(dto: CreateUserDto) {
    const email = dto.email.trim().toLowerCase();
    const userExists = await this.userModel.exists({ email });

    if (userExists) {
      throw new ConflictException('El email ya está registrado');
    }

    const hashedPassword = await hash(dto.password, 12);

    try {
      const user = await this.userModel.create({
        ...dto,
        email,
        password: hashedPassword,
      });

      return {
        id: user._id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        avatarURL: user.avatarURL,
      };
    } catch (error: unknown) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        error.code === 11000
      ) {
        throw new ConflictException('El email ya está registrado');
      }

      throw error;
    }
  }
}
