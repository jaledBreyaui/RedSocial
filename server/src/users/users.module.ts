import { Module } from '@nestjs/common';
import { UsuariosService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    MongooseModule.forRoot(process.env.MONGO_URL!),
  ],
  providers: [UsuariosService],
})
export class UsersModule {}
