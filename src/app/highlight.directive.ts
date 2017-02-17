import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#eee';
    console.log(`highlight called on ${el.nativeElement.tagName}`);
  }

}
