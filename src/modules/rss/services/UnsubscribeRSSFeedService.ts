import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IRSSSubscriptionRepository from '../repositories/IRSSSubscriptionRepository';

interface IRequest {
  subscription_id: string;
}

@injectable()
class UnsubscribeRSSFeedService {
  constructor(
    @inject('RSSSubscriptionRepository')
    private rssSubscriptionRepository: IRSSSubscriptionRepository,
  ) {}

  public async execute({ subscription_id }: IRequest): Promise<void> {
    const subscription = this.rssSubscriptionRepository.getSubscriptionById(
      subscription_id,
    );
    if (!subscription) {
      throw new AppError('Subscription doesnt exist');
    }

    await this.rssSubscriptionRepository.unsubscribeFeed(subscription_id);
  }
}

export default UnsubscribeRSSFeedService;
