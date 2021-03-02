import AppError from '@shared/errors/AppError';
import Parser from 'rss-parser';
import Feed from '../entities/Feed';
import FeedItem from '../entities/FeedItem';
import IRSSProvider from '../models/IRSSProvider';

export default class RSSParserProvider implements IRSSProvider {
  private parser: Parser<Feed, FeedItem>;

  constructor() {
    this.parser = new Parser();
  }

  async getFeed(url: string): Promise<Feed> {
    const feed: Feed = await this.parser.parseURL(url);
    if (!feed) {
      throw new AppError('Wrong URL');
    }

    return feed;
  }
}
