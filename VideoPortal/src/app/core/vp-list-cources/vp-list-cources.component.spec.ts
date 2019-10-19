import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpListCourcesComponent } from './vp-list-cources.component';

describe('VpListCourcesComponent', () => {
  let component: VpListCourcesComponent;
  let fixture: ComponentFixture<VpListCourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpListCourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpListCourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
