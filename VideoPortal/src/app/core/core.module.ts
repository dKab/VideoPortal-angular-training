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



@NgModule({
  declarations: [
    VpHeaderComponent, VpBreadcrumbsComponent, VpSectionComponent, VpListCourcesComponent,
    VpCourceComponent, VpFooterComponent, VpLogoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    VpBreadcrumbsComponent, VpCourceComponent, VpFooterComponent, VpHeaderComponent,
    VpListCourcesComponent, VpLogoComponent, VpSectionComponent
  ]
})
export class CoreModule { }
