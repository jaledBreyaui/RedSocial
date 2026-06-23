export interface PostsByUserStat {
  userId: string;
  userName: string;
  email?: string;
  count: number;
}

export interface CommentsByDayStat {
  date: string;
  count: number;
}

export interface CommentsByPostStat {
  postId: string;
  postTitle: string;
  count: number;
}
