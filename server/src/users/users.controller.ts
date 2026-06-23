import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { type AuthenticatedRequest, AuthGuard } from '../auth/auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { AdminCreateUserDto } from './dto/admin-create-user.dto';
import { UpdateUserSuspensionDto } from './dto/update-user-suspension.dto';
import { UserRole } from './enums/user-role.enum';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: memoryStorage(),
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
    @Body() dto: AdminCreateUserDto,
    @UploadedFile() avatar?: Express.Multer.File,
  ) {
    return this.usersService.createFromAdmin(dto, avatar);
  }

  @Patch(':id/suspension')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  updateSuspension(
    @Param('id') id: string,
    @Body() dto: UpdateUserSuspensionDto,
    @Req() request: AuthenticatedRequest,
  ) {
    return this.usersService.updateSuspension(
      id,
      dto.isSuspended,
      request.user.sub,
    );
  }

  @Get('me')
  @UseGuards(AuthGuard)
  getCurrentUser(@Req() request: AuthenticatedRequest) {
    return this.usersService.findPublicById(request.user.sub);
  }
}
