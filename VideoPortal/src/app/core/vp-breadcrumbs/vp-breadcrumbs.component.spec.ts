import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpBreadcrumbsComponent } from './vp-breadcrumbs.component';

describe('VpBreadcrumbsComponent', () => {
  let component: VpBreadcrumbsComponent;
  let fixture: ComponentFixture<VpBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
