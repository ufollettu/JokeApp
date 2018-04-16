import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Joke} from "../joke";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  constructor() { }

  @Input('joke') data: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();


  deleteItem() {
    this.jokeDeleted.emit(this.data);
  }

  ngOnInit() {
  }

}
