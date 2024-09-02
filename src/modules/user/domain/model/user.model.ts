import { User } from '../entities/User';

export namespace UserModel {
  export type ToCreate = Omit<
    User,
    '_id' | 'avatar' | 'isActive' | 'createdAt'
  >;

  export type ToResult = {
    id: string;
  };
}
