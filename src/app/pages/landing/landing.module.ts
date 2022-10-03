import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    FormsModule,
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    CoreModule,
  ],
})
export class LandingModule {}
