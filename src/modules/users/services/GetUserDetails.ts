import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

interface IRequest {
  popdoc_id: string;
}

@injectable()
class GetUserDetailsService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}

  public async execute({ popdoc_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findByPopdocId(popdoc_id);

    if (!user) {
      throw new AppError('User is not registered');
    }

    return user;
  }
}

export default GetUserDetailsService;
