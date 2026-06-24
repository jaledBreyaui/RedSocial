import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileInterceptor } from '@nestjs/platform-express';
import type { CookieOptions, Response } from 'express';
import { memoryStorage } from 'multer';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { type AuthenticatedRequest, AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.OK)
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
  register(
    @Body() dto: CreateUserDto,
    @UploadedFile() avatar?: Express.Multer.File,
  ) {
    return this.authService.register(dto, avatar);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { accessToken } = await this.authService.login(dto);

    this.setAccessTokenCookie(response, accessToken);

    return {
      ok: true,
      expiresAt: this.authService.getExpiresAtFromToken(accessToken),
    };
  }

  @Post('refresh')
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  async refresh(
    @Req() request: AuthenticatedRequest,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { accessToken } = await this.authService.refresh(request.user.sub);

    this.setAccessTokenCookie(response, accessToken);

    return {
      ok: true,
      expiresAt: this.authService.getExpiresAtFromToken(accessToken),
    };
  }

  @Get('session')
  @UseGuards(AuthGuard)
  session(@Req() request: AuthenticatedRequest) {
    return {
      authenticated: true,
      expiresAt: request.user.exp ? request.user.exp * 1000 : null,
    };
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie(this.accessTokenCookie, this.cookieOptions);

    if (this.accessTokenCookie !== 'accessToken') {
      response.clearCookie('accessToken', this.cookieOptions);
    }

    return { ok: true };
  }

  private setAccessTokenCookie(response: Response, accessToken: string) {
    response.cookie(this.accessTokenCookie, accessToken, {
      ...this.cookieOptions,
      httpOnly: true,
      maxAge: this.tokenDurationSeconds * 1000,
    });
  }

  private get accessTokenCookie(): string {
    return this.configService.get<string>('ACCESS_TOKEN_COOKIE') ?? 'accessToken';
  }

  private get tokenDurationSeconds(): number {
    const duration = Number(
      this.configService.get<string>('TOKEN_DURATION_S') ?? 900,
    );

    return Number.isFinite(duration) && duration > 0 ? duration : 900;
  }

  private get cookieOptions(): CookieOptions {
    const secure = this.configService.get<string>('COOKIE_SECURE') === 'true';
    const sameSite = this.configService.get<'lax' | 'strict' | 'none'>(
      'COOKIE_SAME_SITE',
    );

    return {
      sameSite: sameSite ?? (secure ? 'none' : 'lax'),
      secure,
      path: '/',
    };
  }
}
