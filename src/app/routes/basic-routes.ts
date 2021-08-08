import {Routes} from "@angular/router";
import {TdFormComponent} from "../components/td-form/td-form.component";
import {UsersComponent} from "../components/users/users.component";
import {UserDetailsComponent} from "../components/user-details/user-details.component";


export let routes: Routes = [
  {path: '', component: TdFormComponent},
  {path: ':id', component: UserDetailsComponent}
  ]
