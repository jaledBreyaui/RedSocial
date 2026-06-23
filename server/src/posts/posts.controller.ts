import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  UseInterceptors,
  BadRequestException,
  Delete,
  Put,
  UploadedFile,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { memoryStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { type AuthenticatedRequest, AuthGuard } from '../auth/auth.guard';
// import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
@UseGuards(AuthGuard)
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('create')
  @UseInterceptors(
    FileInterceptor('postImage', {
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
  create(
    @Body() createPostDto: CreatePostDto,
    @UploadedFile() postImage?: Express.Multer.File,
    @Req() request?: AuthenticatedRequest,
  ) {
    const userId = request?.user.sub;
    return this.postsService.create(createPostDto, postImage, userId);
  }

  @Get()
  findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
    @Query('order') order: string = 'recent',
  ) {
    return this.postsService.getAll(+page, +limit, order);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Patch(':id/like')
  toggleLike(@Param('id') id: string, @Req() request: AuthenticatedRequest) {
    return this.postsService.toggleLike(id, request.user.sub);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @Req() request: AuthenticatedRequest,
  ) {
    return this.postsService.update(
      id,
      updatePostDto,
      request.user.sub,
      request.user.role,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() request: AuthenticatedRequest) {
    return this.postsService.remove(id, request.user.sub, request.user.role);
  }
}
