import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import 'rxjs/Rx';

@Component({
  selector: 'app-form-app',
  templateUrl: './form-app.component.html',
  styleUrls: ['./form-app.component.css']
})
export class FormAppComponent implements OnInit {
  form: FormGroup;
  comment = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  email = new FormControl('', [
    Validators.required,
    Validators.pattern('[^ @]*@[^ @]*')
  ]);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'comment': this.comment,
      'name': this.name,
      'email': this.email
    });
    this.form.valueChanges
      .filter(data => this.form.valid)
      .debounceTime(2000)
      .distinctUntilChanged((prev, next) => prev.comment === next.comment)
      .map(data => {
        data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
        return data;
      })
      .map(data => {
        data.lastUpdateTS = new Date();
        return data;
      })
      .subscribe(data => console.log(JSON.stringify(data)));
  }

  onSubmit() {
    console.log('form submitted!');
  }

  ngOnInit() {
  }

}
