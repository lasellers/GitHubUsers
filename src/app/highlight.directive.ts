import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
  @Input() el: string;
  constructor(
    private elementRef: ElementRef
  )
  {
    elementRef.nativeElement.style.backgroundColor = '#eee';
    console.log(`highlight called on ${elementRef.nativeElement.tagName}`);
  }
  ngOnInit() {
    console.log("input-box keys  : ", this.el);
  }
}
