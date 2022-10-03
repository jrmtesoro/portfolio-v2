import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from '../shared/module/material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, NavigationComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [LayoutComponent, SidebarComponent],
})
export class CoreModule {}
