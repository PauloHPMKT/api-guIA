import { Provider } from '@nestjs/common';
import { OpenaiImplementation } from '../../../../modules/openai/infrastructure/implementation/openai-implementation';

export const makeUseCaseProvider = (): Provider[] => [
  {
    provide: 'CreateChatRepository',
    useClass: OpenaiImplementation,
  },
];
