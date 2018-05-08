import { Component, OnInit } from '@angular/core';
import {SimpleService} from "../simple-service";

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor(private service: SimpleService) { }

  ngOnInit() {
  }

}
