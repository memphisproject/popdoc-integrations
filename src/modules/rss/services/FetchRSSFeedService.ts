import { injectable, inject } from 'tsyringe';
import Feed from '@shared/container/providers/RSSFeedProvider/entities/Feed';
import RSSParserProvider from '@shared/container/providers/RSSFeedProvider/implementations/RSSParserProvider';
import IRSSSubscriptionRepository from '../repositories/IRSSSubscriptionRepository';

interface IRequest {
  subscription_id: string;
}

@injectable()
class FetchRSSFeedService {
  constructor(
    @inject('RSSSubscriptionRepository')
    private rssSubscriptionRepository: IRSSSubscriptionRepository,
    @inject('RSSProvider')
    private rssParser: RSSParserProvider,
  ) {}

  public async execute({ subscription_id }: IRequest): Promise<Feed> {
    const rssSubscription = await this.rssSubscriptionRepository.getSubscriptionById(
      subscription_id,
    );

    const rssFeed = await this.rssParser.getFeed(rssSubscription.url);

    return rssFeed;
  }
}

export default FetchRSSFeedService;
