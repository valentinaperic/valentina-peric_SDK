# valentina_peric-SDK - Lord of The Rings SDK 
 
 ![](https://media.giphy.com/media/g7SFZQGzS4HwQ/giphy.gif)
 
_“Who knows? Have patience. Go where you must go, and hope!”_ **— Gandalf**

## Project setup
```
npm install @valentinacodes/lotr-sdk-valentinacodes
```

## Getting Started

To begin using the SDK, import `LordOfTheRings` and create an instance with your API key (you can retrieve one by creating an account [here](https://the-one-api.dev/)).

```javascript
import LordOfTheRings from '@valentinacodes/lotr-sdk-valentinacodes';

const client = new LordOfTheRings({
    apiKey: 'INSERT_API_KEY',
});
```

### Example Request

**Retrieve a Specific Movie:** You can retrieve information about a specific movie by providing an ID

```javascript
try {
  const movie = await client.getMovieById('MOVIE_ID');
  console.log(movie);
} catch (error) {
  console.error('Error retrieving movie:', error);
}
```

**Pro tip:** if you need help finding IDs, you can make a request to get all of the movies and figure out which ID you need by using `getMovies()`

## API Reference

This SDK provides the following methods,
* `getMovies(): Promise<MovieList>`
* `getMovieById(id: string): Promise<MovieDescription>`
* `getMovieQuotesById(id: string): Promise<QuoteList>`
* `getQuotes(): Promise<QuoteList>`
* `getQuoteById(id: string): Promise<QuoteDescription>`
