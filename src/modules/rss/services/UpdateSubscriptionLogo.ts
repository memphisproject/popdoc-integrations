import { inject, injectable } from 'tsyringe';
import IRSSSubscriptionRepository from '@modules/rss/repositories/IRSSSubscriptionRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  subscription_id: string;
  imageUrl: string;
}

@injectable()
class UpdateSubscriptionLogo {
  constructor(
    @inject('RSSSubscriptionRepository')
    private rssSubscriptionRepository: IRSSSubscriptionRepository,
  ) {}

  public async execute({ subscription_id, imageUrl }: IRequest) {
    const subscription = await this.rssSubscriptionRepository.getSubscriptionById(
      subscription_id,
    );

    if (!subscription) {
      throw new AppError('Subscription doesnt exist');
    }

    subscription.logo = imageUrl;
    return this.rssSubscriptionRepository.save(subscription);
  }
}

export default UpdateSubscriptionLogo;
