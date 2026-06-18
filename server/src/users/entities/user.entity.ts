import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ required: true, default: 'Sin nombre' })
  name!: string;

  @Prop({ required: true, default: 'Sin apellido' })
  lastName!: string;

  @Prop({ required: true, default: '' })
  email!: string;

  @Prop({ required: false, default: '' })
  avatarURL?: string;

  @Prop({ required: true })
  password!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
