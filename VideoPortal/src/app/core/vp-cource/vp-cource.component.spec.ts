import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpCourceComponent } from './vp-cource.component';
import { VpCourse } from '../vp-course';

describe('VpCourceComponent', () => {
  let component: VpCourceComponent;
  let fixture: ComponentFixture<VpCourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpCourceComponent ],
      providers: [
        {
          provide: VpCourse,
          useFactory: () => {
            return new VpCourse(0, 'sadas', new Date(), 100, 'asd');
          }
        }
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpCourceComponent);
    component = fixture.componentInstance;
    component.course = new VpCourse(0, 'sadas', new Date(), 100, 'asd');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
