import { injectable, inject } from 'tsyringe';
import Feed from '@shared/container/providers/RSSFeedProvider/entities/Feed';
import RSSParserProvider from '@shared/container/providers/RSSFeedProvider/implementations/RSSParserProvider';
import IRSSIntegrationRepository from '../repositories/IRSSIntegrationRepository';

interface IRequest {
  subscription_id: string;
}

@injectable()
class FetchRSSFeedService {
  constructor(
    @inject('RSSIntegrationRepository')
    private rssIntegrationRepository: IRSSIntegrationRepository,
    @inject('RSSProvider')
    private rssParser: RSSParserProvider,
  ) {}

  public async execute({ subscription_id }: IRequest): Promise<Feed> {
    const rssSubscription = await this.rssIntegrationRepository.getSubscriptionById(
      subscription_id,
    );

    const rssFeed = await this.rssParser.getFeed(rssSubscription.url);

    return rssFeed;
  }
}

export default FetchRSSFeedService;
