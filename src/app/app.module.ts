import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
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
        // PostRoutesModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
