export declare type QuoteDescription = {
    _id: string;
    dialog: string;
    movie: string;
    character: string;
    id: string;
};
export declare type QuoteList = {
    docs: QuoteDescription[];
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
};
