import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateChatDto } from '../dto/create-chat.dto';
import { CreateOpenaiChatUseCase } from '../../application/usecases/CreateChat.usecase';

@Controller('openai')
export class CreateChatController {
  constructor(private readonly createChatUseCase: CreateOpenaiChatUseCase) {}

  @Post('v1/chat/completions')
  @HttpCode(HttpStatus.CREATED)
  async handle(@Body() request: CreateChatDto): Promise<string> {
    return await this.createChatUseCase.execute(request);
  }
}
