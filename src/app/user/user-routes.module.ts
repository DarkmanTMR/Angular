import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./user/user.component";
import {UserDetailsComponent} from "./user-details/user-details.component";


const routes: Routes = [
  {path: '' , component: UsersComponent},
  {path: 'users', component: UserComponent},
  {path: ':id', component: UserDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutesModule { }
