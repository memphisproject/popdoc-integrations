import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import IRSSSubscriptionRepository from '../repositories/IRSSSubscriptionRepository';
import RSSSubscription from '../infra/typeorm/entities/RSSSubscription';

interface IRequest {
  user_id: string;
  url: string;
}

@injectable()
class SubscribeRSSFeedService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
    @inject('RSSSubscriptionRepository')
    private rssSubscriptionRepository: IRSSSubscriptionRepository,
  ) {}

  public async execute({ user_id, url }: IRequest): Promise<RSSSubscription> {
    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new AppError('User doesnt exist');
    }

    const rssSubscription = await this.rssSubscriptionRepository.subscribeFeed({
      user_id,
      url,
    });

    return rssSubscription;
  }
}

export default SubscribeRSSFeedService;
