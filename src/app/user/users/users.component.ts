import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service/user.service";
import {IUser} from "../../models/iuser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users: IUser[];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  ngOnInit(): void {
  }

}
