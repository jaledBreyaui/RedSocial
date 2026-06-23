import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserRole } from '../enums/user-role.enum';

@Schema()
export class User {
  @Prop({ required: true, default: 'Sin nombre' })
  name!: string;

  @Prop({ required: true, default: 'Sin apellido' })
  lastName!: string;

  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  })
  email!: string;

  @Prop({ required: false, default: '' })
  avatarURL?: string;

  @Prop({ required: false, default: '' })
  avatarPublicId?: string;

  @Prop({ required: true })
  password!: string;

  @Prop({
    type: String,
    enum: UserRole,
    default: UserRole.USER,
  })
  role!: UserRole;

  @Prop({ default: false })
  isSuspended!: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
