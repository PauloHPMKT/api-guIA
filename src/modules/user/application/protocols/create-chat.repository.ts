import { CreateChatDto } from '../../presentation/dto/create-chat.dto';

export interface CreateChatRepository {
  createChat(request: CreateChatDto): Promise<string>;
}
