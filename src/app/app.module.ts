import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TdFormComponent } from './components/td-form/td-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UsersComponent } from './components/users/users.component';
import {RouterModule} from "@angular/router";
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {HttpClientModule} from "@angular/common/http";
import {routes} from "./routes/basic-routes";
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TdFormComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    ReactiveFormComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
