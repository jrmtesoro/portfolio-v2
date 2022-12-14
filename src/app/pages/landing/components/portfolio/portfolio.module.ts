import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, FormsModule, SharedModule, PortfolioRoutingModule],
})
export class PortfolioModule {}
