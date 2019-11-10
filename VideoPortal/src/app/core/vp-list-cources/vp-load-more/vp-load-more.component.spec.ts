import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpLoadMoreComponent } from './vp-load-more.component';

describe('VpLoadMoreComponent', () => {
  let component: VpLoadMoreComponent;
  let fixture: ComponentFixture<VpLoadMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpLoadMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpLoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
