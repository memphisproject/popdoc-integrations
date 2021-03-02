import ISubscribeFeedDTO from '@modules/rss/dtos/ISubscribeFeedDTO';
import RSSIntegration from '@modules/rss/infra/typeorm/entities/RSSIntegration';
import { getRepository, Repository } from 'typeorm';
import IRSSIntegrationRepository from '@modules/rss/repositories/IRSSIntegrationRepository';

export default class RSSIntegrationRepository
  implements IRSSIntegrationRepository {
  private ormRepository: Repository<RSSIntegration>;

  constructor() {
    this.ormRepository = getRepository(RSSIntegration);
  }

  async getSubscriptionById(
    subscriptionId: string,
  ): Promise<RSSIntegration | undefined> {
    const subscription = await this.ormRepository.findOne(subscriptionId);
    return subscription;
  }

  async subscribeFeed(data: ISubscribeFeedDTO): Promise<RSSIntegration> {
    const feedSubscription = await this.ormRepository.create(data);
    await this.ormRepository.save(feedSubscription);
    return feedSubscription;
  }

  async unsubscribeFeed(subscriptionId: string): Promise<void> {
    await this.ormRepository.delete(subscriptionId);
  }
}
