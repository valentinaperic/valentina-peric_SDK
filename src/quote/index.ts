import { Base } from '../base';
import { QuoteList, QuoteDescription } from './types';

export class Quote extends Base {

    /**
     * list all movie quotes for one specific movie
     *
     * @param id - The id of the movie
     * @returns a promise that resolves to the quote list
     */
    getMovieQuotesById(id: string): Promise<QuoteList> {
        return this.request(`/movie/${id}/quote`);
    }

    /**
     * list all movie quotes
     *
     * @returns a promise that resolves to the quote description
     */
    getQuotes(): Promise<QuoteList> {
        return this.request(`/quote`);
    }

    /**
     * retrieve one specific movie quote by its id
     *
     * @param id - The id of the quote
     * @returns a promise that resolves to the quote description
     */
    getQuoteById(id: string): Promise<QuoteDescription> {
        return this.request(`/quote/${id}`);
    }
}