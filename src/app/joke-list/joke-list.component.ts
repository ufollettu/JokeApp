import {
  AfterContentInit,
  AfterViewInit, Component, ContentChild, ElementRef, OnInit, QueryList, ViewChild,
  ViewChildren
} from '@angular/core';
import {Joke} from "../joke";
import {JokeComponent} from "../joke/joke.component";

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit, AfterViewInit, AfterContentInit {

  jokes: Joke[] = [
    new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
    new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)")
  ];

  // storing a reference to the child JokeComponent in a property called jokeViewChild.
  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild("header") headerEl: ElementRef;

  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

  constructor() {
    // console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
  }

  addJoke() {
    this.jokes.unshift(new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"));
  }

  deleteJokes() {
    this.jokes = []
  }

  // jokes: Joke[];
  //
  // constructor() {
  //   this.jokes = [
  //     new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
  //     new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
  //     new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
  //   ];
  // }
  //
  // addJoke(joke) {
  //   this.jokes.unshift(joke);
  // }
  //
  deleteJoke(joke) {
    let indexToDelete = this.jokes.indexOf(joke);
    if (indexToDelete !== -1) {
      this.jokes.splice(indexToDelete, 1);
    }
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // console.log(`ngAfterContentInit - jokeContentChild is ${this.jokeContentChild}`);
  }

  ngAfterViewInit() {
    // console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    // convert our QueryList of JokeComponent`s into an array by calling `toArray()
    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    // console.log(jokes);
    // get access to template local variables and change it
    // console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);
    //noinspection TypeScriptUnresolvedVariable
    this.headerEl.nativeElement.textContent = "Best Joke Machine";
  }

}
