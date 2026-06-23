import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { UserRole } from '../users/enums/user-role.enum';
import { StatsService } from './stats.service';

@Controller('admin/stats')
@UseGuards(AuthGuard, RolesGuard)
@Roles(UserRole.ADMIN)
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get('posts-by-user')
  getPostsByUser(
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    return this.statsService.getPostsByUser(from, to);
  }

  @Get('comments-by-day')
  getCommentsByDay(
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    return this.statsService.getCommentsByDay(from, to);
  }

  @Get('comments-by-post')
  getCommentsByPost(
    @Query('from') from?: string,
    @Query('to') to?: string,
  ) {
    return this.statsService.getCommentsByPost(from, to);
  }
}
