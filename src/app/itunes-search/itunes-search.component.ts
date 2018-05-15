import {Component, OnInit} from '@angular/core';
import {SearchServiceService} from "../search-service.service";
import {SearchItem} from "../search-item";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-itunes-search',
  templateUrl: './itunes-search.component.html',
  styleUrls: ['./itunes-search.component.css']
})
export class ItunesSearchComponent implements OnInit {
  private loading:boolean = false;
  // private results: SearchItem[]; // used by observable method
  private results: Observable<SearchItem[]>; // used by async pipe + obs

  constructor(private itunes: SearchServiceService) {
  }

  ngOnInit() {
  }

  // search in iTunes db
  //
  // as Promise
  // doSearch(term: string) {
  //   this.loading = true;
  //   this.itunes.search(term) // promise
  //     .then(
  //       () => this.loading = false
  //     );
  // }

  // as Observable
  //
  // doSearch(term: string) {
  //   this.loading = true;
  //   this.itunes.search(term) // observable
  //     .subscribe(
  //       data => {
  //         this.loading = false;
  //         this.results = data;
  //       }
  //     );
  // }

  // using async pipe in template
  //
  doSearch(term: string) {
    this.loading = true;
    this.results = this.itunes.search(term)
      .do(() => this.loading = false);
  }

}
