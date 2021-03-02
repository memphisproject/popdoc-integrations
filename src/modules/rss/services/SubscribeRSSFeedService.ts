import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import IRSSIntegrationRepository from '../repositories/IRSSIntegrationRepository';
import RSSIntegration from '../infra/typeorm/entities/RSSIntegration';

interface IRequest {
  user_id: string;
  url: string;
}

@injectable()
class SubscribeRSSFeedService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
    @inject('RSSIntegrationRepository')
    private rssIntegrationRepository: IRSSIntegrationRepository,
  ) {}

  public async execute({ user_id, url }: IRequest): Promise<RSSIntegration> {
    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new AppError('User doesnt exist');
    }

    const rssSubscription = await this.rssIntegrationRepository.subscribeFeed({
      user_id,
      url,
    });

    return rssSubscription;
  }
}

export default SubscribeRSSFeedService;
