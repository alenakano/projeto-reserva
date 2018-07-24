import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseModule } from './base/base.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BaseModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
