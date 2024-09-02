export class CreateChatDto {
  messages: CreateMessageDto[];
}

class CreateMessageDto {
  role: ChatRole;
  content: string | null;
}

enum ChatRole {
  SYSTEM = 'system',
  USER = 'user',
}
