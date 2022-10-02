import { NgModule } from '@angular/core';
import { MaterialModule } from './module/material.module';
import { FAwesomeModule } from './module/f-awesome.module';

@NgModule({
  declarations: [],
  imports: [MaterialModule, FAwesomeModule],
  exports: [MaterialModule, FAwesomeModule],
})
export class SharedModule {}
