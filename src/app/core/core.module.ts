import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/module/material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent],
  imports: [CommonModule, SharedModule, FormsModule, MaterialModule],
  exports: [LayoutComponent, SidebarComponent],
})
export class CoreModule {}
