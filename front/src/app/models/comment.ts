import type { PostAuthor } from './post';

export interface Comment {
  _id: string;
  content: string;
  author: PostAuthor;
  post: string;
  likes: string[];
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedCommentsResponse {
  data: Comment[];
  page: number;
  limit: number;
  total: number;
  hasMore: boolean;
}
