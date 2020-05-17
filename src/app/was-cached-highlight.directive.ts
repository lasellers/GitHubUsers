import { OnInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appWasCachedHighlight]'
})
export class WasCachedHighlightDirective implements OnInit {
  @Input() wasCached: boolean = false; // [wasCached]="'false'"
  @Input() classString: string = 'text-info'; // [classString]="'text-warning'"
  public elementRef: ElementRef;

  constructor(
    elementRef: ElementRef
  ) {
    this.elementRef = elementRef;
  }

  ngOnInit() {
    console.log(this.wasCached);
    console.log('class=', this.classString);
    if (this.wasCached) {
      this.elementRef.nativeElement.style.backgroundColor = 'yellow';
      this.elementRef.nativeElement.classList.add('text-info');
    } else {
      this.elementRef.nativeElement.style.backgroundColor = 'white';
      this.elementRef.nativeElement.classList.remove('text-info');
    }

    /* console.log('WasCachedHighlightDirective cached : ', this.wasCached);
    console.log('WasCachedHighlightDirective classString : ', this.classString);
    console.log('WasCachedHighlightDirective elementRef : ', this.elementRef);
    console.log(`WasCachedHighlightDirective called on ${this.elementRef.nativeElement.tagName}`); */
  }

}
