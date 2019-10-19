import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpFooterComponent } from './vp-footer.component';

describe('VpFooterComponent', () => {
  let component: VpFooterComponent;
  let fixture: ComponentFixture<VpFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
