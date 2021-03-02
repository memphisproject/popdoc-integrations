import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUserRepository {
  findById(id: string): Promise<User>;
  findByPopdocId(popdoc_id: string): Promise<User>;
  create(createUserDTO: ICreateUserDTO): Promise<User>;
  removeUser(user_id: string): Promise<void>;
}
