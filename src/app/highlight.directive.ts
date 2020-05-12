import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
  @Input() el: string;

  constructor(
    private elementRef: ElementRef
  ) {
    elementRef.nativeElement.style.backgroundColor = '#eee';
    console.log(`highlight constructor called on ${elementRef.nativeElement.tagName}`);
  }

  ngOnInit() {
    console.log('input-box keys  : ', this.el);

    this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
    console.log(`highlight called on ${this.elementRef.nativeElement.tagName}`);
  }
}
