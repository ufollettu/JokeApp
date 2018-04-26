import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-reactive-model-form',
  templateUrl: './reactive-model-form.component.html',
  styleUrls: ['./reactive-model-form.component.css']
})
export class ReactiveModelFormComponent implements OnInit {
  searchField: FormControl;
  searches: string[] = [];

  constructor() { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      // debounceTime will only publish to the output stream
      // if there has been no more input for that number of milliseconds.
      .debounceTime(400)
      // distinctUntilChanged which only publishes to its output stream
      // if the value being published is different from before.
      .distinctUntilChanged()
      .subscribe(term => {
        this.searches.push(term);
      });
  }

}
