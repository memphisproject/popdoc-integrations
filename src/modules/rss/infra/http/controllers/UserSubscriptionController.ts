import ListUserFeedSubscriptionsService from '@modules/rss/services/ListUserFeedSubscriptionsService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class RSSUserSubscriptionController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const addSubscription = container.resolve(ListUserFeedSubscriptionsService);
    const subscriptions = await addSubscription.execute({ user_id });
    return response.json({ subscriptions });
  }
}
