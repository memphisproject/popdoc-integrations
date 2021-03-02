import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '@modules/users/infra/typeorm/entities/User';
import { uuid } from 'uuidv4';
import IUserRepository from '../IUserRepository';

export default class FakeUsersRepository implements IUserRepository {
  private users: User[] = [];

  async findByPopdocId(popdoc_id: string): Promise<User> {
    const findUser = this.users.find(user => user.popdoc_id === popdoc_id);
    return findUser;
  }

  async create(createUserDTO: ICreateUserDTO): Promise<User> {
    const user = new User();
    Object.assign(
      user,
      {
        id: uuid(),
      },
      createUserDTO,
    );

    this.users.push(user);

    return user;
  }

  async removeUser(popdoc_id: string): Promise<void> {
    const findIndex = this.users.findIndex(
      user => user.popdoc_id === popdoc_id,
    );

    if (findIndex > -1) {
      this.users.splice(findIndex, 1);
    }
  }
}
