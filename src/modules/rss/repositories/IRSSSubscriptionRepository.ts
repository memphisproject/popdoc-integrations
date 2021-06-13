import ISubscribeFeedDTO from '@modules/rss/dtos/ISubscribeFeedDTO';
import IGetUserSubscriptionDTO from '../dtos/IGetUserSubscriptionDTO';
import RSSSubscription from '../infra/typeorm/entities/RSSSubscription';

export default interface IRSSSubscriptionRepository {
  getSubscriptionById(id: string): Promise<RSSSubscription | undefined>;
  subscribeFeed(data: ISubscribeFeedDTO): Promise<RSSSubscription>;
  unsubscribeFeed(subscriptionId: string): Promise<void>;
  getUserSubscriptions(
    data: IGetUserSubscriptionDTO,
  ): Promise<RSSSubscription[]>;
  save(rssSubscription: RSSSubscription): Promise<RSSSubscription>;
}
