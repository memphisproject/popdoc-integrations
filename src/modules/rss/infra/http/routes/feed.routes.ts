import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import FetchFeedController from '../controllers/FetchFeedController';

const rssFeedRouter = Router();

const fetchFeedController = new FetchFeedController();

rssFeedRouter.get(
  '/:subscription_id',
  celebrate({
    [Segments.PARAMS]: {
      subscription_id: Joi.string().uuid().required(),
    },
  }),
  fetchFeedController.list,
);

export default rssFeedRouter;
