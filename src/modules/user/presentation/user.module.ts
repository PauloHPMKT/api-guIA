import { Module, Provider } from '@nestjs/common';
import { OpenAiModule } from '../../../modules/openai/presentation/openai.module';
import { DatabaseModule } from '../../../modules/database/presentation/database.module';
import { makeUserModelProvider } from '../infrastructure/providers/schema.provider';
import { makeUseCaseProvider } from '../infrastructure/providers/usecase.provider';
import { CreateChatUsecase } from '../application/usecases/CreateChat.usecase';
import { CreateUserUseCaseImplementation } from '../application/usecases/CreateUser.usecase';
import { CreateChatController } from './controllers/create-chat.controller';
import { CreateUserController } from './controllers/create-user.controller';

const providers: Provider[] = [
  ...makeUseCaseProvider(),
  ...makeUserModelProvider(),
  CreateChatUsecase,
  CreateUserUseCaseImplementation,
];

@Module({
  imports: [DatabaseModule, OpenAiModule],
  controllers: [CreateUserController, CreateChatController],
  providers,
  exports: [],
})
export class UserModule {}
