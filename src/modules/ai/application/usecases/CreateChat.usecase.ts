import { Inject } from '@nestjs/common';
import { SendMessagePort } from '../ports/sendMessage.port';
import { CreateChatDto } from '../../presentation/dto/create-chat.dto';

export class CreateOpenaiChatUseCase {
  constructor(
    @Inject('SendMessagePort')
    private readonly sendMessagePort: SendMessagePort,
  ) {}

  async execute(request: CreateChatDto) {
    return await this.sendMessagePort.sendMessage(request);
  }
}
