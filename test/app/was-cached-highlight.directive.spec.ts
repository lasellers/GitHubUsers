import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ElementRef, Input } from '@angular/core';
import { Component, HostListener } from '@angular/core';
import { WasCachedHighlightDirective } from '../../src/app/was-cached-highlight.directive';

// Simple test component that will not in the actual app
@Component({
  template: '<div appWasCachedHighlight [wasCached]="false">Testing highlight directive {{false}}</div>'
})
class TestFalseComponent {
  constructor() {
  }
}

describe('Given WasCachedHighlightDirective with wasCached = false', () => {
  let component: TestFalseComponent;
  let fixture: ComponentFixture<TestFalseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestFalseComponent,
        WasCachedHighlightDirective
      ]
    });

    fixture = TestBed.createComponent(TestFalseComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });

  it('should NOT be highlighted', () => {
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
class TestTrueComponent {
  constructor() {
  }
}

describe('Given WasCachedHighlightDirective with wasCached = true', () => {
  let component: TestTrueComponent;
  let fixture: ComponentFixture<TestTrueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestTrueComponent,
        WasCachedHighlightDirective
      ]
    });

    fixture = TestBed.createComponent(TestTrueComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    expect(fixture).toBeDefined();
    expect(component).toBeDefined();
  });

  it('should be highlighted', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const el: HTMLElement = debugEl.querySelector('div');

    fixture.detectChanges();

    expect(el.style.backgroundColor).toBe('yellow');
    expect(el.className).toBe('text-info');
  });
});
