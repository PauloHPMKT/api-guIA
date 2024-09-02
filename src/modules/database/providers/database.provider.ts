import { Provider } from '@nestjs/common';
import mongoose from 'mongoose';

export const makeDatabaseInstanceProvider = (): Provider[] => [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => {
      return mongoose.connect('mongodb://172.23.126.233:27017/guia');
    },
  },
];
