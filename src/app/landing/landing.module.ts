import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { ImageDetailModalComponent } from './pages/image-detail-modal/image-detail-modal.component';

@NgModule({
  declarations: [LandingComponent, ImageDetailModalComponent],
  imports: [CommonModule, LandingRoutingModule, SharedModule],
})
export class LandingModule {}
