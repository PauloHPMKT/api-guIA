import { Global, Module, Provider } from '@nestjs/common';
import { makeDatabaseInstanceProvider } from '../providers/database.provider';

const providers: Provider[] = [...makeDatabaseInstanceProvider()];

@Global()
@Module({
  providers,
  exports: providers,
})
export class DatabaseModule {}
