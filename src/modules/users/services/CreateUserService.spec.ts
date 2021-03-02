import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUserRepository';
import IUserRepository from '../repositories/IUserRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: IUserRepository;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    createUser = new CreateUserService(fakeUsersRepository);
  });
  it('should be able to create an user', async () => {
    const user = await createUser.execute({
      popdoc_id: 'fake-id',
    });

    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('popdoc_id');
  });
  it('should not be able to create an user with an existent popdoc_id', async () => {
    await createUser.execute({
      popdoc_id: 'fake-id',
    });

    await expect(
      createUser.execute({
        popdoc_id: 'fake-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
