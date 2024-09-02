import { Inject, Injectable } from '@nestjs/common';
import { CreateChatDto } from '../../presentation/dto/create-chat.dto';
import { CreateChatRepository } from '../repositories/create-chat.repository';

@Injectable()
export class CreateChatUsecase {
  constructor(
    @Inject('CreateChatRepository')
    private readonly createChatRepository: CreateChatRepository,
  ) {}

  async execute(request: CreateChatDto): Promise<string> {
    console.log('request', request);
    return this.createChatRepository.createChat(request);
  }
}
