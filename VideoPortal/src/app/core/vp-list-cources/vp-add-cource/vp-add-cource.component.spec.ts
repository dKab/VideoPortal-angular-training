import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpAddCourceComponent } from './vp-add-cource.component';

describe('VpAddCourceComponent', () => {
  let component: VpAddCourceComponent;
  let fixture: ComponentFixture<VpAddCourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpAddCourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpAddCourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
