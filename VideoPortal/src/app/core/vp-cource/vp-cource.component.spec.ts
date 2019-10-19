import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpCourceComponent } from './vp-cource.component';

describe('VpCourceComponent', () => {
  let component: VpCourceComponent;
  let fixture: ComponentFixture<VpCourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpCourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpCourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
