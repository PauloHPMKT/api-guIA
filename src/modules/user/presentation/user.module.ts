import { Module, Provider } from '@nestjs/common';
import { OpenAiModule } from '../../../modules/openai/presentation/openai.module';
import { DatabaseModule } from '../../../modules/database/presentation/database.module';
import { makeUserModelProvider } from '../infrastructure/providers/schema.provider';
import { makeRepositoriesProvider } from '../infrastructure/providers/repositories.provider';
import { CreateChatController } from './controllers/create-chat.controller';
import { CreateUserController } from './controllers/create-user.controller';
import { CreateChatUsecase } from '../application/usecases/CreateChat.usecase';
import { ApplicationUseCaseProvider } from '../application/usecase.provider';
import { ReviewerController } from './controllers/content-reviewer.controller';

const providers: Provider[] = [
  ...makeUserModelProvider(),
  ...makeRepositoriesProvider(),
  ...ApplicationUseCaseProvider(),
  CreateChatUsecase,
];

@Module({
  imports: [DatabaseModule, OpenAiModule],
  controllers: [CreateUserController, CreateChatController, ReviewerController],
  providers,
  exports: [],
})
export class UserModule {}
