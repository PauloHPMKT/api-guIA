import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/User';

@Injectable()
export class CreateUserUseCase {
  constructor() {}

  async execute(data: any): Promise<string> {
    const newUSer = new User(data);
    console.log('newUSer', newUSer);
    return newUSer._id.toString();
  }
}
