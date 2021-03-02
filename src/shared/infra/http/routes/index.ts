import rssFeedRouter from '@modules/rss/infra/http/routes/feed.routes';
import rssSubscritionRouter from '@modules/rss/infra/http/routes/subscription.routes';
import usersRouter from '@modules/users/infra/http/routes/user.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/rss/subscription', rssSubscritionRouter);
routes.use('/rss/feed', rssFeedRouter);

export default routes;
