import {Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, Renderer2} from '@angular/core';

interface imgObject {
  initial: string;
  over: string;
}

@Directive({
  selector: '[appRollover]'
})
export class RolloverDirective implements OnChanges {

  @Input('appRollover') config: imgObject = {
    'initial': 'https://unsplash.it/200/300?image=201',
    'over': ''
  };

  @HostBinding('src') private imagePath: string;

  constructor() { }

  ngOnChanges() {
    if (this.config.initial) {
      this.imagePath = this.config.initial;
    }
  }

  @HostListener('mouseover') onMouseOver() {
    this.imagePath = this.config.over;
  }

  @HostListener('mouseout') onMouseOut() {
    this.imagePath = this.config.initial;
  }
}
