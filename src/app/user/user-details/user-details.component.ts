import { Component, OnInit } from '@angular/core';
import {IUser} from "../../models/iuser";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../user.service/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

    user: IUser;
  constructor(private router: Router, private activatedRoute : ActivatedRoute) {
    this.user = this.router.getCurrentNavigation()?.extras.state as IUser;
  }

  ngOnInit(): void {
  }

}