import { CreateChatDto } from '../../presentation/dto/create-chat.dto';

export interface SendMessagePort {
  sendMessage(message: CreateChatDto): Promise<string>;
}
