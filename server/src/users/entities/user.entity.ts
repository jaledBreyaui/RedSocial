import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ required: true, default: 'Sin nombre' })
  nombre: string;

  @Prop({ required: true, default: 'Sin apellido' })
  apellido: string;

  @Prop({ required: true, default: 0 })
  email: string;

  @Prop({ required: false, default: 0 })
  avatarURL: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
