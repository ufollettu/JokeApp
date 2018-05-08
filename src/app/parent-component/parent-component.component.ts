import { Component, OnInit } from '@angular/core';
import {SimpleService} from "../simple-service";

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
  // providers: [SimpleService]
  viewProviders: [SimpleService]
})
export class ParentComponentComponent implements OnInit {

  constructor(private service: SimpleService) { }

  ngOnInit() {
  }

}
