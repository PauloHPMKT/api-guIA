import { Provider } from '@nestjs/common';
import { CreateUserUseCaseImplementation } from './usecases/CreateUser.usecase';

export const ApplicationUseCaseProvider = (): Provider[] => [
  {
    provide: 'CreateUserUseCaseDefault',
    useClass: CreateUserUseCaseImplementation,
  },
];
