import { Module, Provider } from '@nestjs/common';
import { makeOpenaiInstanceProvider } from '../infrastructure/providers/openai.provider';

const providers: Provider[] = [...makeOpenaiInstanceProvider()];

@Module({
  providers,
  exports: providers,
})
export class OpenAiModule {}
