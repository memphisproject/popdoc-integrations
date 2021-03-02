import { container } from 'tsyringe';
import RSSParserProvider from './RSSFeedProvider/implementations/RSSParserProvider';
import IRSSProvider from './RSSFeedProvider/models/IRSSProvider';

container.registerSingleton<IRSSProvider>('RSSProvider', RSSParserProvider);
