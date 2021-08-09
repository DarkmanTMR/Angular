import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from "./post/post.component";
import {PostDetailsComponent} from "./post-details/post-details.component";
import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'posts', component: PostComponent},
  {path: ':id', component: PostDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutesModule { }
