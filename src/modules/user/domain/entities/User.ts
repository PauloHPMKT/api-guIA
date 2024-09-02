import { randomBytes } from 'node:crypto';
import { UserModel } from '../model/user.model';

export class User {
  public readonly _id: string;
  public name: string;
  public email: string;
  public password: string;
  public avatar?: string;
  public isActive?: boolean;
  public createdAt?: Date;

  constructor(props: UserModel.ToCreate, id?: string) {
    Object.assign(this, props);
    this._id = id || randomBytes(12).toString('hex');
    this.isActive = props.isActive ?? true;
    this.avatar = props.avatar ?? null;
    this.createdAt = props.createdAt ?? new Date();
  }
}
