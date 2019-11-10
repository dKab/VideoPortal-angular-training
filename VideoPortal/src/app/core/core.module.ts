import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VpHeaderComponent } from './vp-header/vp-header.component';
import { VpBreadcrumbsComponent } from './vp-breadcrumbs/vp-breadcrumbs.component';
import { VpSectionComponent } from './vp-section/vp-section.component';
import { VpListCourcesComponent } from './vp-list-cources/vp-list-cources.component';
import { VpCourceComponent } from './vp-cource/vp-cource.component';
import { VpFooterComponent } from './vp-footer/vp-footer.component';
import { VpLogoComponent } from './vp-logo/vp-logo.component';
import { VpIcourse } from './vp-icourse';
import { VpIuser } from './vp-iuser';
import { VpSearchCourceComponent } from './vp-list-cources/vp-search-cource/vp-search-cource.component';
import { VpAddCourceComponent } from './vp-list-cources/vp-add-cource/vp-add-cource.component';
import {VpLoadMoreComponent} from './vp-list-cources/vp-load-more/vp-load-more.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    VpHeaderComponent, VpBreadcrumbsComponent, VpSectionComponent, VpListCourcesComponent,
    VpCourceComponent, VpFooterComponent, VpLogoComponent, VpSearchCourceComponent, VpAddCourceComponent, VpLoadMoreComponent],
  imports: [
    CommonModule, NgbModule
  ],
  exports: [
    VpBreadcrumbsComponent, VpCourceComponent, VpFooterComponent, VpHeaderComponent,
    VpListCourcesComponent, VpLogoComponent, VpSectionComponent
  ]
})
export class CoreModule { }
