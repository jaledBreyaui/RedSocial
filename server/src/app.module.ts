import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

const mongoLogger = new Logger('MongoDB');

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URL!, {
      onConnectionCreate: (connection) => {
        connection.on('connected', () => {
          mongoLogger.log('Conexión exitosa con MongoDB');
        });
        connection.on('error', (error) => {
          mongoLogger.error('Error de conexión con MongoDB', error);
        });
        return connection;
      },
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
