import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {SearchItem} from "./search-item";

@Injectable()
export class SearchServiceService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results: SearchItem[];
  loading: boolean;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }

  search(term:string) {
    const promise = new Promise(
      (resolve, reject) => {
        const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=100`;
        this.http.get(apiURL)
          .toPromise()
          .then(
            res => {
              // console.log(res.json());
              //
              // put results from itunes into an array
              // we can use this array in all components that provides SearchServiceService
              // and map the itunes results to our model
              this.results = res.json().results.map(
                item => {
                  return new SearchItem(
                    item.trackName,
                    item.artistName,
                    item.trackViewUrl,
                    item.artworkUrl100,
                    item.artistId
                  );
                }
              );
              // this.results = res.json().results;
              resolve();
            },
            msg => {
              reject(msg);
            }
          );
      }
    );
    return promise;
  }
}
