import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Joke} from '../joke';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  jokeForm: FormGroup;
  setup: FormControl;
  punchline: FormControl;

  @Output() jokeCreated = new EventEmitter<Joke>();

  constructor() { }

  ngOnInit() {
    this.createControls();
    this.createForm();
  }

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }

  createControls() {
    this.setup = new FormControl('', Validators.required);
    this.punchline = new FormControl('', Validators.required);
  }

  createForm() {
    this.jokeForm = new FormGroup({
      setup: this.setup,
      punchline: this.punchline
    });
  }

  onSubmit() {
    if (this.jokeForm.valid) {
      this.createJoke(this.setup.value, this.punchline.value);
      // console.log("form submitted");
      this.jokeForm.reset();
    }
  }

}
