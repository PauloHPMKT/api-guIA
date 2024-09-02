import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OpenAiModule } from './modules/openai/presentation/openai.module';
import { UserModule } from './modules/user/presentation/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    OpenAiModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
