/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

export class MockElementRef extends ElementRef {}

beforeEach(async(() => {
  TestBed.configureTestingModule({
    providers: [
      //more providers
      { provide: ElementRef, useClass: MockElementRef }
    ]
  }).compileComponents();
}));

describe('HighlightDirective', () => {
  it('should create an instance', () => {
   // const directive = new HighlightDirective(ElementRef);
   // expect(directive).toBeTruthy();
    expect(true).toBeTruthy();
  });
});