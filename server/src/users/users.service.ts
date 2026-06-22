import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

type CreateUserData = CreateUserDto & {
  avatarPublicId?: string;
};

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getUsers() {
    return this.userModel.find().select('-password');
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({
      email: email.trim().toLowerCase(),
    });
  }

  async create(userData: CreateUserData): Promise<void> {
    await this.userModel.create(userData);
  }
}
