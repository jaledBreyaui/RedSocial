import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { User } from 'src/users/entities/user.entity';

@Schema({ timestamps: true })
export class Post {
  @Prop({ trim: true })
  content!: string;

  @Prop({
    type: Types.ObjectId,
    ref: User.name,
    required: true,
  })
  author!: string;

  @Prop({ required: false })
  imageURL?: string;

  @Prop({ required: false })
  imagePublicId?: string;

  @Prop({ default: Date.now })
  createdAt!: Date;

  updatedAt!: Date;

  @Prop({
    type: [{ type: Types.ObjectId, ref: User.name }],
    default: [],
  })
  likes!: Types.ObjectId[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
