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
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { UserRole } from '../users/enums/user-role.enum';

const SESSION_EXPIRES_IN_SECONDS = 5 * 60;

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly cloudinaryService: CloudinaryService,
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
    const uploadedAvatar = avatar
      ? await this.cloudinaryService.uploadImage(avatar, 'avatars')
      : undefined;

    try {
      await this.usersService.create({
        ...dto,
        email,
        password: hashedPassword,
        avatarURL: uploadedAvatar?.url,
        avatarPublicId: uploadedAvatar?.publicId,
      });
    } catch (error) {
      await this.cloudinaryService.deleteImage(uploadedAvatar?.publicId);
      throw error;
    }
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email);

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    if (user.isSuspended) {
      throw new UnauthorizedException('Usuario suspendido');
    }

    const passwordMatches = await bcrypt.compare(dto.password, user.password);

    if (!passwordMatches) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const accessToken = await this.signAccessToken({
      sub: user._id.toString(),
      email: user.email,
      role: user.role ?? UserRole.USER,
    });

    return { accessToken };
  }

  async refresh(userId: string) {
    const user = await this.usersService.findPublicById(userId);

    if (user.isSuspended) {
      throw new UnauthorizedException('Usuario suspendido');
    }

    const accessToken = await this.signAccessToken({
      sub: user._id.toString(),
      email: user.email,
      role: user.role ?? UserRole.USER,
    });

    return { accessToken };
  }

  getExpiresAtFromToken(accessToken: string): number {
    const decoded = this.jwtService.decode<{ exp?: number }>(accessToken);

    if (!decoded?.exp) {
      throw new UnauthorizedException('Token invalido');
    }

    return decoded.exp * 1000;
  }

  private signAccessToken(payload: {
    sub: string;
    email: string;
    role: UserRole;
  }) {
    return this.jwtService.signAsync(payload, {
      expiresIn: SESSION_EXPIRES_IN_SECONDS,
    });
  }
}
