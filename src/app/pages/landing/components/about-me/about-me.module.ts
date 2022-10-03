import { NgModule } from '@angular/core';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutMeComponent } from './about-me.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [CommonModule, FormsModule, SharedModule, AboutMeRoutingModule],
})
export class AboutMeModule {}
