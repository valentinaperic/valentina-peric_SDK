import { Base } from '../base';
import { QuoteList, QuoteDescription } from './types';
export declare class Quote extends Base {
    getMovieQuotesById(id: string): Promise<QuoteList>;
    getQuotes(): Promise<QuoteList>;
    getQuoteById(id: string): Promise<QuoteDescription>;
}
