import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import SubscriptionController from '../controllers/SubscriptionController';
import RSSUserSubscriptionController from '../controllers/UserSubscriptionController';

const rssSubscritionRouter = Router();

const subscriptionController = new SubscriptionController();
const userSubscriptionsController = new RSSUserSubscriptionController();

rssSubscritionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.string().uuid().required(),
      url: Joi.string().required(),
      title: Joi.string(),
    },
  }),
  subscriptionController.create,
);

rssSubscritionRouter.get(
  '/me/:user_id',
  celebrate({
    [Segments.PARAMS]: {
      user_id: Joi.string().uuid().required(),
    },
  }),
  userSubscriptionsController.index,
);

rssSubscritionRouter.delete(
  '/:subscription_id',
  celebrate({
    [Segments.PARAMS]: {
      subscription_id: Joi.string().uuid().required(),
    },
  }),
  subscriptionController.delete,
);

export default rssSubscritionRouter;
