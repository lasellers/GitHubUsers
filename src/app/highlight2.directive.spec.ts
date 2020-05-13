import {Highlight2Directive} from './highlight2.directive';
import {ElementRef, Renderer2} from '@angular/core';

describe('Highlight2Directive', () => {
  it('should create an instance', () => {
    const el = new ElementRef('<p highlight>GitHub Users</p>');

    // const r = new Renderer2();

    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Hello world!');

    this.renderer.appendChild(div, text);

    const directive = new Highlight2Directive(el, this.renderer);
    expect(directive).toBeTruthy();
  });
});
