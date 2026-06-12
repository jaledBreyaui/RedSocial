import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request): string {
    return this.appService.getHello();
  }

  @Get(':id')
  getById(@Param('id') param: string): any {
    return param;
  }

  @Post()
  create(@Body() body: any): any {
    return {
      message: body,
    };
  }
}
