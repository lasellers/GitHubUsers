import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ElementRef, Input } from '@angular/core';
import { Component, HostListener } from '@angular/core';
import { WasCachedHighlightDirective } from './was-cached-highlight.directive';

// Simple test component that will not in the actual app
@Component({
  template: '<div appWasCachedHighlight [wasCached]="false">Testing highlight directive {{false}}</div>'
})
class TestComponentFalse {
  constructor() {
  }
}

describe('WasCachedHighlightDirective = false', () => {
  let component: TestComponentFalse;
  let fixture: ComponentFixture<TestComponentFalse>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponentFalse,
        WasCachedHighlightDirective
      ]
    });

    fixture = TestBed.createComponent(TestComponentFalse);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });

  it('should NOT be highlighted when wasCached=false', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const el: HTMLElement = debugEl.querySelector('div');

    fixture.detectChanges();

    expect(el.style.backgroundColor).toBe('white');
    expect(el.className).toBe('');
  });

});

@Component({
  template: '<div appWasCachedHighlight [wasCached]="true">Testing highlight directive {{true}}</div>'
})
class TestComponentTrue {
  constructor() {
  }
}

describe('WasCachedHighlightDirective = true', () => {
  let component: TestComponentTrue;
  let fixture: ComponentFixture<TestComponentTrue>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponentTrue,
        WasCachedHighlightDirective
      ]
    });

    fixture = TestBed.createComponent(TestComponentTrue);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });

  it('should be highlighted when wasCached=true', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const el: HTMLElement = debugEl.querySelector('div');

    fixture.detectChanges();

    expect(el.style.backgroundColor).toBe('yellow');
    expect(el.className).toBe('text-info');
  });
});
