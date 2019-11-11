import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpListCourcesComponent } from './vp-list-cources.component';
import { VpSearchCourceComponent } from './vp-search-cource/vp-search-cource.component';
import { VpAddCourceComponent } from './vp-add-cource/vp-add-cource.component';
import { VpCourse } from '../vp-course';
import { VpCourceComponent } from '../vp-cource/vp-cource.component';
import { VpLoadMoreComponent } from './vp-load-more/vp-load-more.component';
import { HighlightBorderDirective } from '../vp-cource/highlight-border.directive';

describe('VpListCourcesComponent', () => {
  let component: VpListCourcesComponent;
  let fixture: ComponentFixture<VpListCourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpListCourcesComponent, VpSearchCourceComponent, VpAddCourceComponent,
                      VpCourceComponent, VpLoadMoreComponent, HighlightBorderDirective ],
      providers: [
        {
          provide: VpCourse,
          useFactory: () => {
            return new VpCourse(0, 'sadas', new Date(), 100, 'asd', false);
          }
        }
      ]
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
