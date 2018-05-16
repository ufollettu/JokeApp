import {Component, OnInit} from '@angular/core';
import {SearchServiceService} from '../search-service.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private loading: boolean = false;

  constructor(private itunes: SearchServiceService,
              private router: Router,
              private route: ActivatedRoute) {
    // (2) then we subscribe to the search passing the term to doSearch()
    this.route.params.subscribe(
      params => {
        if (params['term']) {
          this.doSearch(params['term']);
        }
      });
  }

  doSearch(term: string) {
    // (3) the search show us the results in the page
    this.loading = true;
    this.itunes.search(term).then(() => this.loading = false);
  }

  onSearch(term: string) {
    // (1) on click search button we navigate to the url with the term name (../search/883)
    this.router.navigate(['search', {term: term}]); // {term: term} is an optional parameter
  }
}
