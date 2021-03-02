import ISubscribeFeedDTO from '@modules/rss/dtos/ISubscribeFeedDTO';
import RSSIntegration from '../infra/typeorm/entities/RSSIntegration';

export default interface IRSSIntegrationRepository {
  getSubscriptionById(id: string): Promise<RSSIntegration | undefined>;
  subscribeFeed(data: ISubscribeFeedDTO): Promise<RSSIntegration>;
  unsubscribeFeed(subscriptionId: string): Promise<void>;
}
