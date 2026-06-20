import {
  Body,
  Controller,
  Post,
  Get,
  UseInterceptors,
  UploadedFile,
  HttpCode,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { randomUUID } from 'node:crypto';
import { extname, join } from 'node:path';
import { diskStorage } from 'multer';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('create')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: diskStorage({
        destination: join(process.cwd(), 'uploads', 'avatars'),
        filename: (_request, file, callback) => {
          const extension = extname(file.originalname).toLowerCase();
          const fileName = `${randomUUID()}${extension}`;
          callback(null, fileName);
        },
      }),
      limits: {
        fileSize: 5 * 1024 * 1024,
      },
      fileFilter: (_request, file, callback) => {
        if (!file.mimetype.startsWith('image/')) {
          callback(
            new BadRequestException('El archivo debe ser una imagen'),
            false,
          );
          return;
        }

        callback(null, true);
      },
    }),
  )
  createUser(
    @Body() body: CreateUserDto,
    @UploadedFile() avatar?: Express.Multer.File,
  ) {
    return this.userService.createUser(body, avatar);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() { email, password }: { email: string; password: string },
  ) {
    return this.userService.login(email, password);
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
}
