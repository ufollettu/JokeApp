import { Injectable } from '@angular/core';
import {Http, Jsonp} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {SearchItem} from "./search-item";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SearchServiceService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results: SearchItem[];
  loading: boolean;

  // using http
  //
  // constructor(private http: Http) {
  //   this.results = [];
  //   this.loading = false;
  // }

  // using JSONP
  //
  constructor(private jsonp: Jsonp) {}

  // using Promise
  //
  // search(term:string) {
  //   const promise = new Promise(
  //     (resolve, reject) => {
  //       const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=100`;
  //       this.http.get(apiURL)
  //         .toPromise()
  //         .then(
  //           res => {
  //             // console.log(res.json());
  //             //
  //             // put results from itunes into an array
  //             // we can use this array in all components that provides SearchServiceService
  //             // and map the itunes results to our model
  //             this.results = res.json().results.map(
  //               item => {
  //                 return new SearchItem(
  //                   item.trackName,
  //                   item.artistName,
  //                   item.trackViewUrl,
  //                   item.artworkUrl100,
  //                   item.artistId
  //                 );
  //               }
  //             );
  //             // this.results = res.json().results;
  //             resolve();
  //           },
  //           msg => {
  //             reject(msg);
  //           }
  //         );
  //     }
  //   );
  //   return promise;
  // }

  // using Observable
  //
  // search(term: string): Observable<SearchItem[]> {
  //   const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=100`;
  //   return this.http.get(apiURL)
  //     .map(
  //       res => {
  //         return res.json().results.map(
  //           item => {
  //             // convert the raw data returned from the iTunes API into an instance of SearchItem
  //             return new SearchItem(
  //               item.trackName,
  //               item.artistName,
  //               item.trackViewUrl,
  //               item.artworkUrl100,
  //               item.artistId
  //             );
  //           }
  //         );
  //       }
  //     );
  // }

  // using JSONP (change http to jsonp and get to request, the url string provides a callback parameter)
  //
  search(term: string): Observable<SearchItem[]> {
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=100&callback=JSONP_CALLBACK`;
    return this.jsonp.request(apiURL)
      .map(
        res => {
          return res.json().results.map(
            item => {
              // convert the raw data returned from the iTunes API into an instance of SearchItem
              return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl100,
                item.artistId
              );
            }
          );
        }
      );
  }
}
