import { Provider } from '@nestjs/common';
import mongoose from 'mongoose';

export const makeDatabaseInstanceProvider = (): Provider[] => [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => {
      return mongoose.connect('mongodb://db:27017/guia');
    },
  },
];
