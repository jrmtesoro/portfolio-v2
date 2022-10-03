import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './module/material.module';
import { FAwesomeModule } from './module/f-awesome.module';

import { ButtonComponent } from './components/button/button.component';
import { SocialIconComponent } from './components/social-icon/social-icon.component';

@NgModule({
  declarations: [ButtonComponent, SocialIconComponent],
  imports: [CommonModule, MaterialModule, FAwesomeModule, FormsModule],
  exports: [
    //modules
    MaterialModule,
    FAwesomeModule,
    FormsModule,

    //components
    ButtonComponent,
    SocialIconComponent,
  ],
})
export class SharedModule {}
