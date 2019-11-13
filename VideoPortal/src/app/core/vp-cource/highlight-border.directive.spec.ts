import { HighlightBorderDirective } from './highlight-border.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: '<div [appHighlightBorder]="color">Test</div>'
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

  it('should paint border red', () => {
    cmp.color = 'red';
    fixture.detectChanges();
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const div: HTMLElement = debugEl.querySelector('div');
    expect(div.style.borderColor).toBe('red');
  });

  it('should paint border blue', () => {
    cmp.color = 'blue';
    fixture.detectChanges();
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const div: HTMLElement = debugEl.querySelector('div');
    expect(div.style.borderColor).toBe('blue');
  });

  it('should paint border green', () => {
    cmp.color = 'green';
    fixture.detectChanges();
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const div: HTMLElement = debugEl.querySelector('div');
    expect(div.style.borderColor).toBe('green');
  });
});
