import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IUserRepository from '../repositories/IUserRepository';

interface IRequest {
  popdoc_id: string;
}

@injectable()
class RemoveUserService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}

  public async execute({ popdoc_id }: IRequest): Promise<void> {
    const userExists = await this.usersRepository.findByPopdocId(popdoc_id);

    if (!userExists) {
      throw new AppError('User is not registered');
    }

    await this.usersRepository.removeUser(popdoc_id);
  }
}

export default RemoveUserService;
