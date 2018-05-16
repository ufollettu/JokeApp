import {Component, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnDestroy {
  promiseData: {};
  promise: Promise<{}>;
  observableData: number;
  subscription = null;
  observable: Observable<number>;

  constructor() {
    // with classic Promise
    this.getPromise().then(value => this.promiseData = value);
    // with promise async pipe in template we do not need then()
    this.promise = this.getPromise();
    // with classic Observable
    this.subscribeObservable();
    // with observable async pipe in template we do not need subscribe()
    this.observable = this.getObservable();
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('promise complete'), 2000);
    });
  }

  getObservable() {
    return Observable
      .interval(1000)
      .take(10)
      .map(value => value * value);
  }

  subscribeObservable() {
    this.subscription = this.getObservable()
      .subscribe(value => this.observableData = value);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
