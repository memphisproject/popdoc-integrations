import IGetUserSubscriptionDTO from '@modules/rss/dtos/IGetUserSubscriptionDTO';
import ISubscribeFeedDTO from '@modules/rss/dtos/ISubscribeFeedDTO';
import IRSSSubscriptionRepository from '@modules/rss/repositories/IRSSSubscriptionRepository';
import { getRepository, Repository } from 'typeorm';
import RSSSubscription from '../entities/RSSSubscription';

export default class RSSSubscriptionRepository
  implements IRSSSubscriptionRepository {
  private ormRepository: Repository<RSSSubscription>;

  constructor() {
    this.ormRepository = getRepository(RSSSubscription);
  }

  getUserSubscriptions(
    data: IGetUserSubscriptionDTO,
  ): Promise<RSSSubscription[]> {
    throw new Error('Method not implemented.');
  }

  async getSubscriptionById(
    subscriptionId: string,
  ): Promise<RSSSubscription | undefined> {
    const subscription = await this.ormRepository.findOne(subscriptionId);
    return subscription;
  }

  async subscribeFeed(data: ISubscribeFeedDTO): Promise<RSSSubscription> {
    const feedSubscription = await this.ormRepository.create(data);
    await this.ormRepository.save(feedSubscription);
    return feedSubscription;
  }

  async unsubscribeFeed(subscriptionId: string): Promise<void> {
    await this.ormRepository.delete(subscriptionId);
  }
}
