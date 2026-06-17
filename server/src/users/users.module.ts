import { Module } from '@nestjs/common';
import { UsuariosService } from './users.service';

@Module({
  providers: [UsuariosService],
})
export class UsersModule {}
