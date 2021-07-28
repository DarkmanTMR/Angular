import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {Ipost} from "../../models/ipost";

@Component({
  selector: 'app-users-with-posts',
  templateUrl: './user-with-posts.component.html',
  styleUrls: ['./user-with-posts.component.scss']
})

export class UserWithPostsComponent implements OnInit {

  posts: Ipost[];

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.getUserWithPostsById(id).subscribe(value => this.posts = value);
    });
  }

  ngOnInit(): void {
  }

}
