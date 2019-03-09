export interface IUserModel {
  id?: number;
  email: string;
  password?: string;
  rePassword?: string;
  username?: string;
}

export interface IAuthModel {
  id: string;
  ttl: number;
  created: Date;
  userId: number;
}
