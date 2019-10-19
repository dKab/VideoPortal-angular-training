import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpLogoComponent } from './vp-logo.component';

describe('VpLogoComponent', () => {
  let component: VpLogoComponent;
  let fixture: ComponentFixture<VpLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
