import { UserModel } from '../../domain/model/user.model';

export interface CreateUserRepository {
  create: (data: UserModel.ToCreate) => Promise<string>;
}
