import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input,
  OnChanges, OnDestroy, OnInit,
  Output, SimpleChanges
} from '@angular/core';
import {Joke} from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  constructor() {
    // console.log(`new - data is ${this.data}`);
  }

  @Input('joke') data: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  deleteItem() {
    this.jokeDeleted.emit(this.data);
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(`ngOnChanges - data is ${this.data}`);
    // for (let key in changes) {
    //   console.log(`
    //     ${key} changed.
    //     Current: ${changes[key].currentValue}.
    //     Previous: ${changes[key].previousValue}
    //   `);
    // }
  }

  ngOnInit() {
    // console.log(`ngOnInit  - data is ${this.data}`);
  }

  ngDoCheck() {
    // console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    // console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    // console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    // console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    // console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    // console.log("ngOnDestroy");
  }

}
