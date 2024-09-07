export class CreateChatDto {
  messages: CreateMessageDto[];
}

class CreateMessageDto {
  role: ChatRole;
  content: string | null;
}

export enum ChatRole {
  SYSTEM = 'system',
  USER = 'user',
}
