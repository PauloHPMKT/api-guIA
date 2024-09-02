import { Provider } from '@nestjs/common';
import { OpenaiImplementation } from '../../../../modules/openai/infrastructure/implementation/openai-implementation';
import { UserMongooseRepository } from '../implementation/user-mongoose.repository';

export const makeUseCaseProvider = (): Provider[] => [
  {
    provide: 'CreateChatRepository',
    useClass: OpenaiImplementation,
  },
  {
    provide: 'CreateUserRepository',
    useClass: UserMongooseRepository,
  },
];
