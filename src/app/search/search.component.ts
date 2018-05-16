import {Component, OnInit} from '@angular/core';
import {SearchServiceService} from '../search-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private loading: boolean = false;

  constructor(private itunes: SearchServiceService) {
  }

  ngOnInit() {
  }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(() => this.loading = false);
  }
}
