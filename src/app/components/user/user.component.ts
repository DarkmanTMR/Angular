import  {Component, Input, OnInit} from '@angular/core';
import {Iuser} from "../../models/iuser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: Iuser;

  constructor(
    private router :Router,
    private activatedRoute: ActivatedRoute
    ) {

  }

  ngOnInit(): void {
  }


  navigateToUserDetails(): void {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute})

  }
  navigateToUserWithPosts(): void {
    this.router.navigate([this.user.id,'user-with-posts'],{relativeTo: this.activatedRoute})
  }

}
