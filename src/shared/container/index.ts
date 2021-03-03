import RSSSubscriptionRepository from '@modules/rss/infra/typeorm/repositories/RSSSubscriptionRepository';
import IRSSSubscriptionRepository from '@modules/rss/repositories/IRSSSubscriptionRepository';
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import { container } from 'tsyringe';

import './providers';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IRSSSubscriptionRepository>(
  'RSSSubscriptionRepository',
  RSSSubscriptionRepository,
);
