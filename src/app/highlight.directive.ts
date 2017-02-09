import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#eee';
   /* el.nativeElement.style.color = 'gold';*/
    console.log(`highlight called on ${el.nativeElement.tagName}`);
   }

}
