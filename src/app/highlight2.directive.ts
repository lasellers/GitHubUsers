import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[highlight2]'
})
export class Highlight2Directive implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'AntiqueWhite ');
    // console.log(`highlight2 called on ${this.renderer.}`);
  }
}
