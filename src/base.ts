/**
 * all of the implementations will extend this functionality.
 * all the common functionality like defining headers, etc
*/

import fetch from 'isomorphic-unfetch';

type Config = {
    apiKey: string;
    baseUrl?: string; 
};

export abstract class Base {
    private apiKey: string;
    private baseUrl: string;

    constructor(config: Config) {
        this.apiKey = config.apiKey;
        this.baseUrl = config.baseUrl || 'https://the-one-api.dev/v2/';
    }

    /**
     * Make an HTTP request to the specified endpoint 
     * @param endpoint the endpoint that it is making a request to
     * @param options optional configurations for the request
     * @returns a promise that will be parsed into JSON
     * @throws an error if response is not successful
    */
    protected async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
        
        //get the things needed for the HTTP request
        const url = `${this.baseUrl}${endpoint}`;

        const headers = {
            Authorization: `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
        };

        const config = {
            ...options,
            headers,
        };

        //make the HTTP request
        const response = await fetch(url, config);

        //check if response is successful 
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    }
}

