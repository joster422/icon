import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MarkdownModule } from 'ngx-markdown';

import { FormControlModule } from '@joster-dev/form-control';
import { IconModule } from '@joster-dev/icon';
// import { IconModule } from 'dist/icon';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormControlModule,
    IconModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
