import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '@modules/users/infra/typeorm/entities/User';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import { getRepository, Repository } from 'typeorm';

export default class FakeUsersRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  findById(id: string): Promise<User> {
    const findUser = this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return findUser;
  }

  async findByPopdocId(popdoc_id: string): Promise<User> {
    const findUser = this.ormRepository.findOne({
      where: {
        popdoc_id,
      },
    });

    return findUser;
  }

  async create(createUserDTO: ICreateUserDTO): Promise<User> {
    const user = await this.ormRepository.create(createUserDTO);
    await this.ormRepository.save(user);
    return user;
  }

  async removeUser(popdoc_id: string): Promise<void> {
    await this.ormRepository.delete(popdoc_id);
  }
}
