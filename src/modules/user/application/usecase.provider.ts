import { Provider } from '@nestjs/common';
import { CreateUserUseCaseImplementation } from './usecases/CreateUser.usecase';
import { CreateChatReviewUsecase } from './usecases/CreateChatReview.usecase';

export const ApplicationUseCaseProvider = (): Provider[] => [
  {
    provide: 'CreateUserUseCaseDefault',
    useClass: CreateUserUseCaseImplementation,
  },
  {
    provide: 'CreateChatContentReviewUsecase',
    useClass: CreateChatReviewUsecase,
  },
];
