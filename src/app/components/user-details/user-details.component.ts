import { Component, OnInit } from '@angular/core';
import {IUser} from "../../models/iuser";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

    user: IUser;

  constructor(private router :Router, private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userService.userDetails(id).subscribe(value => this.user = value);

    });
  }
    ngOnInit(): void {
  }

}
