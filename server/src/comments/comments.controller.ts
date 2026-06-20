import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
// import { UpdateCommentDto } from './dto/update-comment.dto';
import { type AuthenticatedRequest, AuthGuard } from '../auth/auth.guard';

@Controller('/posts/:postId/comments')
@UseGuards(AuthGuard)
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(
    @Body() createCommentDto: CreateCommentDto,
    @Param('postId') postId: string,
    @Req() request?: AuthenticatedRequest,
  ) {
    const userId = request?.user.sub;
    return this.commentsService.create(createCommentDto, userId, postId);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get()
  findOne(@Param('postId') id: string) {
    return this.commentsService.findOne(+id);
  }

  @Delete()
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
