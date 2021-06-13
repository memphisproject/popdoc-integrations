import FeedItem from './FeedItem';

export default class Feed {
  link: string;

  image: string;

  icon: string;

  feedUrl: string;

  title: string;

  lastBuildDate: string;

  items: FeedItem[];
}
