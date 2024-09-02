import { User } from '../../domain/entities/User';

export interface VerifyUserRepository {
  verify: (param: Partial<User>) => Promise<boolean>;
}
