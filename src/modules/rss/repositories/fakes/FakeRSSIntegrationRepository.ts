import ISubscribeFeedDTO from '@modules/rss/dtos/ISubscribeFeedDTO';
import RSSIntegration from '@modules/rss/infra/typeorm/entities/RSSIntegration';
import { uuid } from 'uuidv4';
import IRSSIntegrationRepository from '../IRSSIntegrationRepository';

export default class FakeRSSIntegrationRepository
  implements IRSSIntegrationRepository {
  private rssIntegrations: RSSIntegration[] = [];

  async getSubscriptionById(
    subscriptionId: string,
  ): Promise<RSSIntegration | undefined> {
    const findIndex = this.rssIntegrations.findIndex(
      subscription => subscription.id === subscriptionId,
    );

    if (findIndex < -1) {
      return null;
    }

    return this.rssIntegrations[findIndex];
  }

  async subscribeFeed(data: ISubscribeFeedDTO): Promise<RSSIntegration> {
    const feedSubscription = new RSSIntegration();
    Object.assign(
      feedSubscription,
      {
        id: uuid(),
      },
      data,
    );

    this.rssIntegrations.push(feedSubscription);

    return feedSubscription;
  }

  async unsubscribeFeed(subscriptionId: string): Promise<void> {
    const findIndex = this.rssIntegrations.findIndex(
      subscription => subscription.id === subscriptionId,
    );

    if (findIndex > -1) {
      this.users.splice(findIndex, 1);
    }
  }
}
