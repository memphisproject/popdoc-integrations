import SubscribeRSSFeedService from '@modules/rss/services/SubscribeRSSFeedService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UnsubscribeRSSFeedService from '@modules/rss/services/UnsubscribeRSSFeedService';
import UpdateSubscriptionLogo from '@modules/rss/services/UpdateSubscriptionLogo';

export default class RSSSubscriptionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { url, user_id, title } = request.body;
    const addSubscription = container.resolve(SubscribeRSSFeedService);
    const subscription = await addSubscription.execute({ url, user_id, title });
    return response.json({ subscription });
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { subscription_id } = request.params;
    const removeSubscription = container.resolve(UnsubscribeRSSFeedService);
    await removeSubscription.execute({ subscription_id });
    return response.sendStatus(200);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { subscription_id } = request.params;
    const { imageUrl } = request.body;

    const editSubscriptionLogo = container.resolve(UpdateSubscriptionLogo);
    const subscription = await editSubscriptionLogo.execute({
      subscription_id,
      imageUrl,
    });
    return response.json({ subscription });
  }
}
