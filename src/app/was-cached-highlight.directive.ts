import { OnInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appWasCachedHighlight]'
})
export class WasCachedHighlightDirective implements OnInit, OnChanges {
  @Input() wasCached: boolean = false; // [wasCached]="'false'"
  @Input() classString: string = 'text-info'; // [classString]="'text-warning'"
  public elementRef: ElementRef;

  constructor(
    elementRef: ElementRef
  ) {
    this.elementRef = elementRef;
  }

  ngOnInit(): void {
    this.changeHighlight();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.input) {
      this.changeHighlight();
    }
  }

  changeHighlight(): void {
    if (this.wasCached) {
      this.elementRef.nativeElement.style.backgroundColor = 'yellow';
      this.elementRef.nativeElement.classList.add('text-info');
    } else {
      this.elementRef.nativeElement.style.backgroundColor = 'white';
      this.elementRef.nativeElement.classList.remove('text-info');
    }
  }

}
