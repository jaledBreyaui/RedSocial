import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  BadRequestException,
  UploadedFile,
  UseGuards,
  Req,
} from '@nestjs/common';
import { memoryStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
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
  findAll() {
    return this.postsService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.postsService.remove(+id);
  // }
}
