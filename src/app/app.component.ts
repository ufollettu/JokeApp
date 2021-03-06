import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  InjectionToken
} from '@angular/core';
import {Joke} from './joke';
import {AlertComponent} from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  joke: Joke = new Joke('content joke', 'done');

  @ViewChild('div') div: any;
  @ViewChildren(AlertComponent, { read: ViewContainerRef }) alerts: QueryList<AlertComponent>;
  // QueryList tip: when the state of the application changes Angular will automatically update the object items for you.
  @Input() type: string;

  ngAfterViewInit() {
    // console.log(this.div);
    // console.log(this.type);
    // this.alerts.forEach(alert => console.log(alert));
  }

}
