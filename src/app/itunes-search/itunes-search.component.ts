import {Component, OnInit} from '@angular/core';
import {SearchServiceService} from "../search-service.service";

@Component({
  selector: 'app-itunes-search',
  templateUrl: './itunes-search.component.html',
  styleUrls: ['./itunes-search.component.css']
})
export class ItunesSearchComponent implements OnInit {
  private loading:boolean = false;

  constructor(private itunes:SearchServiceService) {
  }

  ngOnInit() {
  }

  // search in iTunes db
  doSearch(term: string) {
    // console.log(term);
    this.loading = true;
    this.itunes.search(term) // promise
      .then(
        () => this.loading = false
      );
  }

}
