import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TdFormComponent } from './components/td-form/td-form.component';
import {FormsModule} from "@angular/forms";
import { UsersComponent } from './components/users/users.component';
import {RouterModule} from "@angular/router";
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {HttpClientModule} from "@angular/common/http";
import {routes} from "./routes/basic-routes";


@NgModule({
  declarations: [
    AppComponent,
    TdFormComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,

  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
