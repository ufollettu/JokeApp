import {Injectable} from '@angular/core';
import {SearchItem} from "./search-item";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class SearchService {
  apiRoot: string = 'https://itunes.apple.com/search';
  results: SearchItem[];
  loading: boolean;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }

  search(term: string) {
    const promise = new Promise(
      (resolve, reject) => {
        const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
        this.http.get(apiURL)
          .toPromise()
          .then(
            res => {
              this.results = res.json().results.map(
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
