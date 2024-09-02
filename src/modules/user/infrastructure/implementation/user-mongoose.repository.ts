import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/User';
import { UserModel } from '../../domain/model/user.model';

@Injectable()
export class UserMongooseRepository {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<User>,
  ) {}

  async create(user: UserModel.ToCreate): Promise<string> {
    const { _id } = await this.userModel.create({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    return _id.toString();
  }
}
