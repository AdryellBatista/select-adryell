import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SelectAdryellComponent } from './select-adryell.component';

@NgModule({
  imports: [
    CommonModule,
    //BrowserAnimationsModule
  ],
  declarations: [SelectAdryellComponent],
  exports: [SelectAdryellComponent]
})
export class SelectAdryellModule { }
