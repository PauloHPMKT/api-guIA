import {
  Body,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { CreateUserUseCaseImplementation } from '../../application/usecases/CreateUser.usecase';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('user')
export class CreateUserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCaseImplementation,
  ) {}

  @Post()
  async handle(@Body() data: CreateUserDto) {
    try {
      const result = await this.createUserUseCase.execute({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      console.log('result', result);
      return result;
    } catch (error) {
      return new InternalServerErrorException(error);
    }
  }
}
