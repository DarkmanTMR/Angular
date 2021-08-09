import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostRoutesModule} from "./post-routes.module";
import {PostsComponent} from "./posts/posts.component";
import {PostComponent} from "./post/post.component";
import {PostDetailsComponent} from "./post-details/post-details.component";
import {HttpClientModule} from "@angular/common/http";




@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostRoutesModule,
    HttpClientModule
  ]
})
export class PostModule { }
