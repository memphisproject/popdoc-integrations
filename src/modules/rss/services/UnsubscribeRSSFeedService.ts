import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IRSSIntegrationRepository from '../repositories/IRSSIntegrationRepository';

interface IRequest {
  subscription_id: string;
}

@injectable()
class UnsubscribeRSSFeedService {
  constructor(
    @inject('RSSIntegrationRepository')
    private rssIntegrationRepository: IRSSIntegrationRepository,
  ) {}

  public async execute({ subscription_id }: IRequest): Promise<void> {
    const subscription = this.rssIntegrationRepository.getSubscriptionById(
      subscription_id,
    );
    if (!subscription) {
      throw new AppError('Subscription doesnt exist');
    }

    await this.rssIntegrationRepository.unsubscribeFeed(subscription_id);
  }
}

export default UnsubscribeRSSFeedService;
