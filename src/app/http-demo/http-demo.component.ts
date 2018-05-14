import {Component, OnInit} from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {
  apiRoot: string = "http://httpbin.org";

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  doGET() {
    console.log("get");
    const url = `${this.apiRoot}/get`;
    const search = new URLSearchParams(); // create a configuration file with additional params

    search.set('pino', 'mino');
    search.set('limit', '200');

    this.http.get(url, {search: search})
      .subscribe(
        res => console.log(res.json())
      );
  }

  doPOST() {
    console.log("post");
    const url = `${this.apiRoot}/post`;
    const search = new URLSearchParams();

    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.post(url, {nome: 'anselmo', cognome: 'mario'}, {search})
      .subscribe(
        res => console.log(res.json())
      );
  }

  doPUT() {
    console.log("PUT");
    const url = `${this.apiRoot}/put`;
    const search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.put(url, {moo:"foo",goo:"loo"}, {search}).subscribe(res => console.log(res.json()));
  }

  doDELETE() {
    console.log("delete");
    const url = `${this.apiRoot}/delete`;
    const search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    this.http.delete(url, {search}) // {search: search} ES& destructuring same name
      .subscribe(
        res => console.log(res.json())
      );
  }

  doGETAsPromise() {
    console.log("get as promise");
    const url = `${this.apiRoot}/get`;
    const search = new URLSearchParams();
    search.set('puttimo', 'moo');
    search.set('limit', '25');

    this.http.get(url, {search})
      .toPromise() // convert observable to promise
      .then(
        res => console.log(res.json())
      );
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
    const url = `${this.apiRoot}/post`;
    this.http.get(url)
      .toPromise()
      .then(
        res => console.log(res.json()),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

  doGETAsObservableError() {
    console.log("get as obs error");
    const url = `${this.apiRoot}/post`;
    this.http.get(url)
      .subscribe(
        res => console.log(res.json),
        msg => console.log(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

  doGETWithHeaders() {
    console.log("get with headers");

    let headers = new Headers();
    headers.append('Authorization', btoa('username:password')); // btoa convert string to base64

    let options = new RequestOptions();
    options.headers = headers;

    let url = `${this.apiRoot}/get`;

    this.http.get(url, options)
      .subscribe(
        res => console.log(res.json()),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }
}
