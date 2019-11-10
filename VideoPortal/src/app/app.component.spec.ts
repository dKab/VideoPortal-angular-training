import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import * as core from './core/core.module';
import { VpHeaderComponent } from './core/vp-header/vp-header.component';
import { VpBreadcrumbsComponent } from './core/vp-breadcrumbs/vp-breadcrumbs.component';
import { VpSectionComponent } from './core/vp-section/vp-section.component';
import { VpListCourcesComponent } from './core/vp-list-cources/vp-list-cources.component';
import { VpCourceComponent } from './core/vp-cource/vp-cource.component';
import { VpFooterComponent } from './core/vp-footer/vp-footer.component';
import { VpLogoComponent } from './core/vp-logo/vp-logo.component';
import { VpSearchCourceComponent } from './core/vp-list-cources/vp-search-cource/vp-search-cource.component';
import { VpAddCourceComponent } from './core/vp-list-cources/vp-add-cource/vp-add-cource.component';
import { VpLoadMoreComponent } from './core/vp-list-cources/vp-load-more/vp-load-more.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent , VpHeaderComponent, VpBreadcrumbsComponent, VpSectionComponent, VpListCourcesComponent,
        VpCourceComponent, VpFooterComponent, VpLogoComponent, VpSearchCourceComponent, VpAddCourceComponent, VpLoadMoreComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'VideoPortal'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('VideoPortal');
  });


});
