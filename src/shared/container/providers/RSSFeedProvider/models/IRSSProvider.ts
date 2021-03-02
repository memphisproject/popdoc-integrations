import Feed from '../entities/Feed';

export default interface IRSSProvider {
  getFeed(url: string): Promise<Feed>;
}
