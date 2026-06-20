import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcryptjs';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(
    dto: CreateUserDto,
    avatar?: Express.Multer.File,
  ): Promise<void> {
    const email = dto.email.trim().toLowerCase();
    const userExists = await this.usersService.findByEmail(email);

    if (userExists) {
      throw new ConflictException('El email ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 12);
    const avatarURL = avatar
      ? `/uploads/avatars/${avatar.filename}`
      : undefined;

    await this.usersService.create({
      ...dto,
      email,
      password: hashedPassword,
      avatarURL,
    });
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email);

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const passwordMatches = await bcrypt.compare(dto.password, user.password);

    if (!passwordMatches) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const accessToken = await this.jwtService.signAsync({
      sub: user._id.toString(),
      email: user.email,
    });

    return { accessToken };
  }
}
