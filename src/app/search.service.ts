import {Injectable} from '@angular/core';
import {SearchItem} from './search-item';
import {Http, Jsonp, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SearchService {
  apiRoot = 'https://itunes.apple.com/search';
  results: SearchItem[];
  loading: boolean;

  // constructor(private http: Http) {
  //   this.results = [];
  //   this.loading = false;
  // }

  constructor(private jsonp: Jsonp) {}

  // search(term: string) {
  //   const promise = new Promise(
  //     (resolve, reject) => {
  //       const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
  //       this.http.get(apiURL)
  //         .toPromise()
  //         .then(
  //           res => {
  //             this.results = res.json().results.map(
  //               item => {
  //                 return new SearchItem(
  //                   item.trackName,
  //                   item.artistName,
  //                   item.trackViewUrl,
  //                   item.artworkUrl30,
  //                   item.artistId
  //                 );
  //               }
  //             );
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

  search(term: string): Observable<SearchItem[]> {
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
    return this.jsonp.get(apiURL)
      .map(
        res => {
          return res.json().results.map(
            item => {
              return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
              );
            }
          );
        }
      );

  }
}
