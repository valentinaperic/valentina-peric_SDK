![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjZmZWVjMzc2NjA1MzQ0YTNjMjU0ZWM0OWZlYTRjMzg2Njg3NzM4YSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/dgUu3sizWUWFG/giphy.gif)

**Hello - thank you for taking the time to review my project! I really enjoyed implementing this because I am a _major_ Lord of the Rings fan! :)**

Let's talk about my SDK design, 

I decided to implement this SDK in typescript and node. I enjoy writing in JavaScript and I felt that these two together would solve the needs for this project. Writing in typescript is beneficial because it allows you to specify types for variables, functions, etc. This is paramount for catching errors early that might otherwise get caught in a later process like in production. Instead of errors getting caught at run-time, they will be caught at compile-time. This may cause a strain in developer productivity but it has great long term benefits. 

I also took advantage of TypeScript type declarations. For example,

```Javascript
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
}
```

I saw what the API returned and used an explicit structure that matched that. This introduces type safety. It ensures that there are no incorrect property assignents or other incompatitble types. This strengthens the integrity of the code base while also increasing readability and consistency. You know exactly what the `Promise` will return. Pretty cool. 

Ok, let's take a step back and review the structure of the project. I wanted to keep the project modular. You will see that I created two seperate folders in the `src` folder, `movie` and `quote`.
<br>
![image](https://github.com/valentinaperic/valentina-peric_SDK/assets/17259336/e448455b-0d1e-48b1-b7b7-110f2a2bc6d5)

I did this for a couple of reasons. This allowed me to break the code down into smaller, bite size pieces. This allowed for these modules be to used throughout the project and to focus on solving it's own specific needs. I put any api call that involved movies in the `movie` folder and any quote request in the `quote` folder. This allows for easier maintainbility. If there was a bug related to movies, I would know where to look since the code is isolated. 

Speaking of isolation, keeping the code modular is great for scaling. As the API and SDK grows, more code can be implemented as seperate modules without disrupting any other part of the code base. Since we all work on teams, multiple people can work in the same code base knowing that they will not step on eachother toes and cause some hectic merge conflicts (we've all been there!) 

![](https://media.giphy.com/media/cFkiFMDg3iFoI/giphy.gif)

To continue on the note of scaling, I also want to talk about encapsulation and scaling with the `base.ts` file. You will see that all of the implementations will extend the functionalities in this project. Common functionalities like the defining the header with the API key and the actual request call are defined here so I did not have the rewrite it in every single API request. This also reduces dependencies and coupling between modules. With each module operating independently, this improves code maintainability and flexibility. I also defined a `utils.ts` file. This also continues the song and dance of code resuability and modularity. The neat part of this `utils.ts` file is with the `applyMixin` function, it can avoid issues with a class inheriting from multiple classes with overlapping functionality. Again, promoting the song and dance of modularity. 

I also want to touch on [isomorphic-unfetch](https://www.npmjs.com/package/isomorphic-unfetch) and [microbundle](https://www.npmjs.com/package/microbundle). I used these packages because of they are widely used and dependable. The cool thing about `isomorphic-unfetch` is that it uses a simplified fetch API thus making it easy to make HTTP requests on both the server side and client side. It also supports async/await and promises which I wrote about [here](https://dev.to/valentinaperic/asyncawait-in-javascript-2i8c) and [here](https://dev.to/valentinaperic/breaking-down-promises-in-javascript-34a8). I used `microbundle` because of it's lightweight simplicity. It was fast to set up and use and helped enhance developer productivity while also keeping bundle sizes small. 

Lastly, I want to touch on testing. I created a [seperate project](https://github.com/valentinaperic/lotr-sdk-valentinacodes-test) to test each endpoint. Before posting the SDK on NPM, I first linked the NPM package by using the command `npm link ../lotr-sdk-valentinacodes` that was local on my machine. I then tested each endpoint in the `app.ts` file by logging out the response. Once satisfied, I published the package to NPM, unlinked the local package, and downloaded the package and tested again. 

Thank you again for taking the time to review my project. I have been on hiring teams before and I know the amount of work and care it takes into hiring an engineer! I would be excited to be provided feedback and chat more. Feel free to ask any questions as well. I look forward to learning more about LibLab and meeting more team members! 

Happy coding and feel free to reach me at valentinaperic24@gmail.com.
You can also reach me on [LinkedIn](https://www.linkedin.com/in/valentinaperic/).

Cheers! :)

