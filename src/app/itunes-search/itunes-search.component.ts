import {Component, OnInit} from '@angular/core';
import {SearchServiceService} from "../search-service.service";
import {SearchItem} from "../search-item";
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-itunes-search',
  templateUrl: './itunes-search.component.html',
  styleUrls: ['./itunes-search.component.css']
})
export class ItunesSearchComponent implements OnInit {
  private loading:boolean = false;
  // private results: SearchItem[]; // used by observable method
  private results: Observable<SearchItem[]>; // used by async pipe + obs
  private searchField: FormControl;

  constructor(private itunes: SearchServiceService) {
  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do(() => this.loading = true)
      .switchMap(term => this.itunes.search(term))
      .do(() => this.loading = false); // change from Observable<Observable<SearchItem[]>> into Observable<SearchItem[]>
      // .subscribe(value => console.log(value)); // Need to call subscribe to make it hot!
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
    this.results = this.itunes.search(term);
  }

}
