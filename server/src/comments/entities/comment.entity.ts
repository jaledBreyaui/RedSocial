import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { Post } from 'src/posts/entities/post.entity';
@Schema({ timestamps: true })
export class Comment {
  @Prop({ required: true, trim: true })
  content!: string;

  @Prop({
    type: Types.ObjectId,
    ref: User.name,
    required: true,
  })
  author!: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: Post.name,
    required: true,
  })
  post!: Types.ObjectId;

  @Prop({
    type: [{ type: Types.ObjectId, ref: User.name }],
    default: [],
  })
  likes!: Types.ObjectId[];

  createdAt!: Date;
  updatedAt!: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
