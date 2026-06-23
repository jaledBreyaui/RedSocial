export interface User {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  avatarURL?: string;
  role: 'user' | 'admin';
  isSuspended?: boolean;
}

export interface CreateUserRequest {
  name: string;
  lastName: string;
  email: string;
  password: string;
  role?: 'user' | 'admin';
}
