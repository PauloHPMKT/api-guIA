import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../../application/usecases/CreateUser.usecase';

@Controller('user')
export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async handle(@Body() data: any): Promise<string> {
    return await this.createUserUseCase.execute(data);
  }
}
