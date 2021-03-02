import FetchRSSFeedService from '@modules/rss/services/FetchRSSFeedService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class FetchFeedController {
  public async list(request: Request, response: Response): Promise<Response> {
    const { subscription_id } = request.params;
    const fetchFeed = container.resolve(FetchRSSFeedService);
    const feed = await fetchFeed.execute({ subscription_id });
    return response.json(feed);
  }
}
