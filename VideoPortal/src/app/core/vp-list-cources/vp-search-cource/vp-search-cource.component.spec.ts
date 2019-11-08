import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpSearchCourceComponent } from './vp-search-cource.component';

describe('VpSearchCourceComponent', () => {
  let component: VpSearchCourceComponent;
  let fixture: ComponentFixture<VpSearchCourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpSearchCourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpSearchCourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
