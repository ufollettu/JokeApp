import {Component, OnInit} from '@angular/core';
import {SearchService} from "../search.service";
import {SearchItem} from "../search-item";
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-http-exercise',
  templateUrl: './http-exercise.component.html',
  styleUrls: ['./http-exercise.component.css']
})
export class HttpExerciseComponent implements OnInit {
  private loading: boolean = false;
  // private results: SearchItem[];
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;

  constructor(private itunes: SearchService) {
  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do(() => this.loading = true)
      .switchMap(term => this.itunes.search(term))
      .do(() => this.loading = false);
  }

  // doSearch(term: string) {
  //   this.loading = true;
  //   this.results = this.itunes.search(term);
  // }
}
