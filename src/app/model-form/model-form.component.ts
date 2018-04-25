import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {
  langs: string[] = [
    'English',
    'French',
    'German',
    'Italian'
  ];
  myForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl()
      }),
      email: new FormControl(),
      password: new FormControl(),
      language: new FormControl()
    })
  }

}
