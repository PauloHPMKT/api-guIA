import { Provider } from '@nestjs/common';
import { OpenaiImplementation } from '../../../openai/infrastructure/implementation/openai-implementation';
import { UserMongooseRepository } from '../implementation/user-mongoose.repository';

export const makeRepositoriesProvider = (): Provider[] => [
  {
    provide: 'CreateChatRepository',
    useClass: OpenaiImplementation,
  },
  {
    provide: 'CreateUserRepository',
    useClass: UserMongooseRepository,
  },
  {
    provide: 'VerifyUserRepository',
    useClass: UserMongooseRepository,
  },
];
