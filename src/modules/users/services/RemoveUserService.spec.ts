import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUserRepository';
import IUserRepository from '../repositories/IUserRepository';
import RemoveUserService from './RemoveUserService';

let fakeUsersRepository: IUserRepository;
let removeUserService: RemoveUserService;

describe('RemoveUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    removeUserService = new RemoveUserService(fakeUsersRepository);
  });
  it('should be able to remove an user', async () => {
    const removeUser = jest.spyOn(fakeUsersRepository, 'removeUser');

    await fakeUsersRepository.create({
      popdoc_id: 'fake-id',
    });

    await removeUserService.execute({ popdoc_id: 'fake-id' });

    expect(removeUser).toBeCalled();
  });
  it('should be not able to remove an user that doesnt exist', async () => {
    await expect(
      removeUserService.execute({
        popdoc_id: 'fake-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
