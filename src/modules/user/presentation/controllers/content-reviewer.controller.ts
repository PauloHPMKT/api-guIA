import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateChatReviewUsecase } from '../../application/usecases/CreateChatReview.usecase';

@Controller('content-reviewer')
export class ReviewerController {
  constructor(
    @Inject('CreateChatContentReviewUsecase')
    private readonly CreateChatContentReviewUsecase: CreateChatReviewUsecase,
  ) {}
  @Post('v1/chat/completions')
  async handle(@Body() { content, intention }: any): Promise<string> {
    try {
      const result = await this.CreateChatContentReviewUsecase.execute({
        content,
        intention,
      });
      return result;
    } catch (error) {
      return error;
    }
  }
}
