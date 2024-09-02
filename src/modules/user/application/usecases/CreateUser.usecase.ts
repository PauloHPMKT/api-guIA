import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRepository } from '../protocols/create-user.repository';
import { VerifyUserRepository } from '../protocols/verify-user.repository';
import {
  CreateUserUseCase,
  CreateUserUseCaseProtocol,
} from '../../domain/usecases-protocols/CreateUser.usecase.protocol';

@Injectable()
export class CreateUserUseCaseImplementation
  implements CreateUserUseCaseProtocol
{
  constructor(
    @Inject('CreateUserRepository')
    private readonly createUserRepository: CreateUserRepository,
    @Inject('VerifyUserRepository')
    private readonly verifyUserRepository: VerifyUserRepository,
  ) {}

  async execute(
    params: CreateUserUseCase.Params,
  ): Promise<CreateUserUseCase.Result> {
    const user = await this.verifyUserRepository.verify({
      email: params.email,
    });
    if (user) {
      throw new Error('User already exists');
    }

    const id = await this.createUserRepository.create({
      name: params.name,
      email: params.email,
      password: params.password,
    });
    return { id };
  }
}
