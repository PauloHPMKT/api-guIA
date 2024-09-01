import OpenAI from 'openai';
import { Inject, Injectable } from '@nestjs/common';
import { SendMessagePort } from '../../application/ports/sendMessage.port';
import { CreateChatDto } from '../../presentation/dto/create-chat.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OpenaiImplementationAdater implements SendMessagePort {
  constructor(
    @Inject('OPENAI_PROVIDER')
    private readonly openai: OpenAI,
    private readonly configService: ConfigService,
  ) {}

  async sendMessage(request: CreateChatDto): Promise<string> {
    const { messages } = request;

    const response = await this.openai.chat.completions.create({
      model: this.configService.get<string>('OPENAI_MODEL'),
      max_tokens: Number(this.configService.get('OPENAI_MAX_TOKENS')),
      temperature: Number(this.configService.get('OPENAI_TEMPERATURE')),
      messages,
    });
    console.log(response);
    return response.choices[0].message.content || '';
  }
}
