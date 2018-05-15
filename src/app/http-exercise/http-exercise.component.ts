import { Component, OnInit } from '@angular/core';
import {SearchService} from "../search.service";
import {SearchItem} from "../search-item";

@Component({
  selector: 'app-http-exercise',
  templateUrl: './http-exercise.component.html',
  styleUrls: ['./http-exercise.component.css']
})
export class HttpExerciseComponent implements OnInit {
  private loading: boolean = false;

  constructor(private itunes: SearchService) { }

  ngOnInit() {
  }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term)
      .then(
        () => this.loading = false
      );
  }
}
