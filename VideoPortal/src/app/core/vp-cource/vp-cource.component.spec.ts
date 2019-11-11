import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpCourceComponent } from './vp-cource.component';
import { VpCourse } from '../vp-course';
import { HighlightBorderDirective } from './highlight-border.directive';

describe('VpCourceComponent', () => {
  let component: VpCourceComponent;
  let fixture: ComponentFixture<VpCourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpCourceComponent, HighlightBorderDirective ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpCourceComponent);
    component = fixture.componentInstance;
    component.course = new VpCourse(0, 'sadas', new Date(), 100, 'asd', false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
