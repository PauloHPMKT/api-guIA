import OpenAI from 'openai';
import { Inject } from '@nestjs/common';
import { CreateChatRepository } from '../../../../modules/user/application/repositories/create-chat.repository';
import { CreateChatDto } from '../../../../modules/user/presentation/dto/create-chat.dto';

export class OpenaiImplementation implements CreateChatRepository {
  constructor(
    @Inject('OPENAI_PROVIDER')
    private readonly openai: OpenAI,
  ) {}

  async createChat(prompt: CreateChatDto): Promise<string> {
    const { messages } = prompt;
    const response = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      max_tokens: 2048,
      temperature: 0.8,
      messages,
    });
    return response.choices[0].message.content || '';
  }
}
