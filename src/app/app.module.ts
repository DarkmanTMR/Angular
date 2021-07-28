import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import {routes} from "./routes/basic.routes";
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { UserWithPostsComponent } from './components/user-with-posts/user-with-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    UserDetailsComponent,
    PostComponent,
    PostDetailsComponent,
    UserWithPostsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
