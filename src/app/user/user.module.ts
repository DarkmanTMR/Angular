import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutesModule } from './user-routes.module';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutesModule,
    HttpClientModule

  ]
})
export class UserModule { }
