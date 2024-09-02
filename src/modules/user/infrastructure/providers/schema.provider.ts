import { Connection } from 'mongoose';
import { Provider } from '@nestjs/common';
import { UserSchema } from '../schemas/user.schema';

export const makeUserModelProvider = (): Provider[] => [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
