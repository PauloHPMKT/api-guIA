import { UserModel } from '../model/user.model';

export interface CreateUserUseCaseProtocol {
  execute: (
    params: CreateUserUseCase.Params,
  ) => Promise<CreateUserUseCase.Result>;
}

export namespace CreateUserUseCase {
  export type Params = UserModel.ToCreate;
  export type Result = UserModel.ToResult;
}
