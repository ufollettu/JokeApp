import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer, Renderer2} from '@angular/core';

@Directive({
  selector: '[ccCardHover]'
})
export class CcCardHoverDirective {

  // add configuration to html template input property
  @Input('ccCardHover') config = {
    querySelector: '.card-text'
  };

  @HostBinding('class.card-outline-danger') // bind to host element property
  // we use the alternative ngClass syntax by binding to the [class.<class-name>]
  private isHovering: boolean = false;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
    // renderer.setStyle(el.nativeElement, 'backgroundColor', 'lightgray');
  }

  @HostListener('mouseover')
  onMouseOver() {
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setStyle(part, 'display', 'block');
    this.isHovering = true;
  }

  @HostListener('mouseout')
  onMouseOut() {
    let part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setStyle(part, 'display', 'none');
    this.isHovering = false;
  }

}
