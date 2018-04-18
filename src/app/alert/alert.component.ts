import {AfterContentInit, Component, ContentChild, Input} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements AfterContentInit {
  @Input() type: string = "success"; // pass property from parent component template (AppComponent)
  @ContentChild("insideContent") insideContent;


  alert() {
    console.log("alert");
  }

  ngAfterContentInit() {
    console.log(this.insideContent);
  }
}
