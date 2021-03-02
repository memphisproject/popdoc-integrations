import RSSIntegrationRepository from '@modules/rss/infra/typeorm/repositories/RSSIntegrationRepository';
import IRSSIntegrationRepository from '@modules/rss/repositories/IRSSIntegrationRepository';
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import { container } from 'tsyringe';

import './providers';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IRSSIntegrationRepository>(
  'RSSIntegrationRepository',
  RSSIntegrationRepository,
);
