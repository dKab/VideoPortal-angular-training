import { Directive, ElementRef, Input } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appHighlightBorder]'
})
export class HighlightBorderDirective {


  constructor(private element: ElementRef) {  }

  @Input('appHighlightBorder') set draw(color: string) {
    console.log('directive:', color);
    if (color !== 'default') {
      this.element.nativeElement.style.borderColor = color;
      this.element.nativeElement.style.borderStyle = 'solid';
    }
  }
}
