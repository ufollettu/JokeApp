import {Inject, Injectable, InjectionToken} from '@angular/core';
import {Joke} from "./joke";

// const MAX_JOKES_TOKEN = new InjectionToken<string>("Max Jokes");

@Injectable()
export class JokeService {

  jokes: Joke[];
  maxJokes: number;

  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
    this.maxJokes = 2;
  }

  addJoke(joke) {
    // Remove one extra joke so we have room for the new one we are adding in.
    if (this.jokes.length > (this.maxJokes + 1)) {
      this.jokes.splice(this.maxJokes, this.jokes.length - (this.maxJokes + 1));
    }

    // Push new joke to the front
    this.jokes.unshift(joke);
  }

  deleteJoke(joke) {
    let indexToDelete = this.jokes.indexOf(joke);
    if (indexToDelete !== -1) {
      this.jokes.splice(indexToDelete, 1);
    }
  }

}
