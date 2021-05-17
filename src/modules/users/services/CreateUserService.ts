import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

interface IRequest {
  popdoc_id: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}

  public async execute({ popdoc_id }: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByPopdocId(
      popdoc_id,
    );

    if (userAlreadyExists) {
      throw new AppError('User already registered');
    }

    return this.usersRepository.create({
      popdoc_id,
    });
  }
}

export default CreateUserService;
