import { HighlightBorderDirective } from './highlight-border.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: '<div HighlightBorderDirective = "color">Test</div>'
})
class TestComponent {
  constructor() {}
  color: string;
}


describe('HighlightBorderDirective', () => {
  let cmp: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent, HighlightBorderDirective]
      });

      fixture = TestBed.createComponent(TestComponent);
      cmp = fixture.componentInstance;
    }
  );

  it('should create component', () => {
    expect(cmp).toBeDefined();
  });

  it('should create an instance', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const div: HTMLElement = debugEl.querySelector('div');
    cmp.color = 'blue';
    fixture.detectChanges();
    expect(div.style.borderColor).toBe(cmp.color);
  });
});
