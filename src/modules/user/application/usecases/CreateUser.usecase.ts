import { Inject, Injectable } from '@nestjs/common';
import {
  CreateUserUseCase,
  CreateUserUseCaseProtocol,
} from '../../domain/usecases-protocols/CreateUser.usecase.protocol';
import { CreateUserRepository } from '../repositories/create-user.repository';

@Injectable()
export class CreateUserUseCaseImplementation
  implements CreateUserUseCaseProtocol
{
  constructor(
    @Inject('CreateUserRepository')
    private readonly createUserRepository: CreateUserRepository,
  ) {}

  async execute(
    params: CreateUserUseCase.Params,
  ): Promise<CreateUserUseCase.Result> {
    const id = await this.createUserRepository.create({
      name: params.name,
      email: params.email,
      password: params.password,
    });
    return { id };
  }
}
