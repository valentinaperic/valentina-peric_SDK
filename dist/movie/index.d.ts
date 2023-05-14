import { Base } from '../base';
import { MovieDescription, MovieList } from './types';
export declare class Movie extends Base {
    getMovies(): Promise<MovieList>;
    getMovieById(id: string): Promise<MovieDescription>;
}
