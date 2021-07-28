import {UsersComponent} from "../components/users/users.component";
import {PostsComponent} from "../components/posts/posts.component";
import {UserDetailsComponent} from "../components/user-details/user-details.component";
import {Routes} from "@angular/router";
import {PostDetailsComponent} from "../components/post-details/post-details.component";
import {
    UserWithPostsComponent
} from "../components/user-with-posts/user-with-posts.component";

export let routes: Routes = [
  {
    path:'users',component: UsersComponent,
    children : [
      {path: ':id', component: UserDetailsComponent},
      {path: ':id/user-with-posts', component: UserWithPostsComponent, children :[
          {path: ':id', component: UserWithPostsComponent}
    ]},

  ]},
  // {path:'users/:id',component: UserDetailsComponent}, дає можливість дивитися деталі кожного юзера окремо


  {path:'posts',component: PostsComponent,
  children : [
    {path: ':id', component: PostDetailsComponent}
  ]
  }

  ];



