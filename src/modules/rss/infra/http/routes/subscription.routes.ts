import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import SubscriptionController from '../controllers/SubscriptionController';

const rssSubscritionRouter = Router();

const subscriptionController = new SubscriptionController();

rssSubscritionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      user_id: Joi.string().uuid().required(),
      url: Joi.string().required(),
    },
  }),
  subscriptionController.create,
);

export default rssSubscritionRouter;
