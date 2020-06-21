import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { Component, HostListener } from '@angular/core';
import { WasCachedHighlightDirective } from './was-cached-highlight.directive';

// Simple test component that will not in the actual app
@Component({
  template: '<div appWasCachedHighlight [wasCached]="wasCached">Testing highlight directive {{wasCached}}</div>'
})
class TestComponent {
  public wasCached: boolean = false;

  constructor() {
  }

}

describe('WasCachedHighlightDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        WasCachedHighlightDirective
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should create test fixture', () => {
    expect(fixture).toBeDefined();
  });

  it('should create test component', () => {
    expect(component).toBeDefined();
  });

  it('should NOT be highlighed when wasCached=false', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const el: HTMLElement = debugEl.querySelector('p');

    component.wasCached = false;
    fixture.detectChanges();

    expect(component.wasCached).toBe(false);
    expect(el.style.backgroundColor).toBe('white');
    expect(el.className).toBe('');
  });

  it('should be highlighed when wasCached=true', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const el: HTMLElement = debugEl.querySelector('p');

    component.wasCached = true;
    fixture.detectChanges();

    expect(component.wasCached).toBe(true);
    expect(el.style.backgroundColor).toBe('yellow');
    expect(el.className).toBe('text-info');
  });
});
