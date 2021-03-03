import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import IRSSSubscriptionRepository from '../repositories/IRSSSubscriptionRepository';
import RSSSubscription from '../infra/typeorm/entities/RSSSubscription';

interface IRequest {
  user_id: string;
}

@injectable()
class ListUserFeedSubscriptionsService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
    @inject('RSSSubscriptionRepository')
    private rssSubscriptionRepository: IRSSSubscriptionRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<RSSSubscription[]> {
    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new AppError('User doesnt exist');
    }

    const rssSubscriptions = await this.rssSubscriptionRepository.getUserSubscriptions(
      {
        user_id,
      },
    );

    return rssSubscriptions;
  }
}

export default ListUserFeedSubscriptionsService;
