import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutesModule} from "./app-routes.module";
import {HttpClientModule} from "@angular/common/http";





@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutesModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
