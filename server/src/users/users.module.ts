import { Module } from '@nestjs/common';
import { UsuariosService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { AppService } from 'src/app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    MongooseModule.forRoot(process.env.MONGO_URL!),
  ],
  providers: [AppService],
  controllers: [AppService],
})
export class UsersModule {}
