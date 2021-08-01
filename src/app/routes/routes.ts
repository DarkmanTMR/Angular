import {Routes} from "@angular/router";
import {UsersComponent} from "../components/users/users.component";
import {UserDetailsComponent} from "../components/user-details/user-details.component";
import {UserDeactivatorService} from "../services/user-deactivator.service";
import {PostDetailsComponent} from "../components/post-details/post-details.component";
import {PostsComponent} from "../components/posts/posts.component";

export let routes: Routes = [
  {path: 'users', component: UsersComponent,canDeactivate:[UserDeactivatorService]},
  // {path: 'users', redirectTo: '', pathMatch: 'full'},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'posts', component: PostsComponent},
  // {path: 'posts', redirectTo: '', pathMatch: 'full'},
  {path: 'posts/:id', component: PostDetailsComponent}
];


