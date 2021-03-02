import SubscribeRSSFeedService from '@modules/rss/services/SubscribeRSSFeedService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class RSSSubscriptionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { url, user_id } = request.body;
    const addSubscription = container.resolve(SubscribeRSSFeedService);
    const subscription = await addSubscription.execute({ url, user_id });
    return response.json({ subscription });
  }
}
