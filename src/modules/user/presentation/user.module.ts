import { Module, Provider } from '@nestjs/common';
import { OpenAiModule } from '../../../modules/openai/presentation/openai.module';
import { makeUseCaseProvider } from '../infrastructure/providers/usecase.provider';
import { CreateChatUsecase } from '../application/usecases/CreateChat.usecase';
import { CreateUserUseCase } from '../application/usecases/CreateUser.usecase';
import { CreateChatController } from './controllers/create-chat.controller';
import { CreateUserController } from './controllers/create-user.controller';

const providers: Provider[] = [
  ...makeUseCaseProvider(),
  CreateChatUsecase,
  CreateUserUseCase,
];

@Module({
  imports: [OpenAiModule],
  controllers: [CreateUserController, CreateChatController],
  providers,
  exports: [],
})
export class UserModule {}
