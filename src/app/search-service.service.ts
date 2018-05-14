import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchServiceService {
  apiRoot:string = 'https://itunes.apple.com/search';
  results:Object[];
  loading:boolean;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }

  search(term:string) {
    const promise = new Promise(
      (resolve, reject) => {
        const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=10`;
        this.http.get(apiURL)
          .toPromise()
          .then(
            res => {
              // console.log(res.json());
              this.results = res.json().results; // put results from itunes into an array
              // we can use this array in all components that provides SearchServiceService
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
