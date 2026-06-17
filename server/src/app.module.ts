import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuariosController } from './usuarios/usuarios.controller';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsuariosModule, PostsModule, AuthModule],
  controllers: [AppController, UsuarioController, UsuariosController],
  providers: [AppService],
})
export class AppModule {}
