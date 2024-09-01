export class CreateChatDto {
  messages: CreateMessage[];
}

class CreateMessage {
  role: ChatRole;
  content: string;
}

enum ChatRole {
  USER = 'user',
  SYSTEM = 'system',
}
