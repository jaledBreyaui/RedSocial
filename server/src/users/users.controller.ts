import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { type AuthenticatedRequest, AuthGuard } from '../auth/auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('me')
  @UseGuards(AuthGuard)
  getCurrentUser(@Req() request: AuthenticatedRequest) {
    return this.usersService.findPublicById(request.user.sub);
  }
}
