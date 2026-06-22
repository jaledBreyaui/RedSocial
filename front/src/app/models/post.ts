import type { Comment } from './comment';

export interface PostAuthor {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  avatarURL?: string;
  role?: 'user' | 'admin';
}

export interface Post {
  _id: string;
  content: string;
  author: PostAuthor;
  imageURL?: string;
  createdAt: string;
  likes: string[];
}

export interface PostDetail {
  post: Post;
  comments: Comment[];
}

export interface ToggleLikeResponse {
  likes: string[];
}
