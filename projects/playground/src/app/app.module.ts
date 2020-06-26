import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IconModule } from '@joster/icon';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
