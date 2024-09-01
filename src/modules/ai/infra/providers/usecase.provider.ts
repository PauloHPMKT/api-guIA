import { Provider } from '@nestjs/common';
import { OpenaiImplementationAdater } from '../adapters/openai-implementatio.adapter';

export const makeOpenaiUsecasesProvider = (): Provider[] => [
  {
    provide: 'SendMessagePort',
    useClass: OpenaiImplementationAdater,
  },
];
