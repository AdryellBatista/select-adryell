import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SelectAdryellComponent } from './select-adryell/select-adryell.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectAdryellComponent
  ],
  imports: [
    CommonModule,
    //BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
