import { Body, Controller, Post } from '@nestjs/common';
import { CreateChatDto } from '../dto/create-chat.dto';
import { CreateChatUsecase } from '../../application/usecases/CreateChat.usecase';

@Controller('openai')
export class CreateChatController {
  constructor(private readonly createChatUseCase: CreateChatUsecase) {}

  @Post('v1/chat/completions')
  async handle(@Body() request: CreateChatDto): Promise<string> {
    return this.createChatUseCase.execute(request);
  }
}
