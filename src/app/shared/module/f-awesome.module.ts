import { NgModule } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class FAwesomeModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fab, fas, far);
  }
}
