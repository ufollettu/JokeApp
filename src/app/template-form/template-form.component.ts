import {Component, OnInit, ViewChild} from '@angular/core';
import { Signup } from '../signup';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  model: Signup = new Signup(); // imported signup form class
  @ViewChild('f') form: any; // use the 'f' local variable from template
  langs: string[] = [
    'Italiano',
    'Ottomano',
    'Sanscrito'
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('form submittetd');
      this.form.reset();
    }
  }

}
