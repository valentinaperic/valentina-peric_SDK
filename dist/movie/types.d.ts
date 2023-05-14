export declare type MovieDescription = {
    _id: string;
    name: string;
    runtimeInMinutes: number;
    budgetInMillions: number;
    boxOfficeRevenueInMillions: number;
    academyAwardNominations: number;
    academyAwardWins: number;
    rottenTomatoesScore: number;
    wikiUrl: string;
};
export declare type MovieList = {
    docs: MovieDescription[];
    total: number;
    limit: number;
    offset: number;
    page: number;
    pages: number;
};
