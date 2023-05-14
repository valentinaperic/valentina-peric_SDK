import { Base } from '../base';
import { MovieDescription, MovieList } from './types';

export class Movie extends Base {

    /**
     * list all the lord of the rings movies
     *
     * @returns a promise that resolves to the movie list
     */
    getMovies(): Promise<MovieList> {
        return this.request(`/movie`);
    }

    /**
     * get a specific lord of the rings movie
     *
     * @returns a promise that resolves to the movie Description
     */
    getMovieById(id: string): Promise<MovieDescription> {
        return this.request(`/movie/${id}`);
    }
}