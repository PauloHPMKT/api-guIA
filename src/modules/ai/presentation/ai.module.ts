import { Module, Provider } from '@nestjs/common';
import { makeOpenaiInstanceProvider } from '../infra/providers/openai.provider';
import { makeOpenaiUsecasesProvider } from '../infra/providers/usecase.provider';
import { CreateOpenaiChatUseCase } from '../application/usecases/CreateChat.usecase';
import { CreateChatController } from './controllers/create-chat.controller';

const providers: Provider[] = [
  ...makeOpenaiInstanceProvider(),
  ...makeOpenaiUsecasesProvider(),
  CreateOpenaiChatUseCase,
];

@Module({
  imports: [],
  controllers: [CreateChatController],
  providers,
})
export class AiModule {}
