import { Component, OnInit } from '@angular/core';
import {IUser} from "../../models/iuser";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.scss']
})
export class TdFormComponent implements OnInit {

  users: IUser[];
  user: IUser;


  constructor(private userService: UserService,private router: Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  userDetails() {
    // this.user = this.router.getCurrentNavigation()?.extras.state as IUser;
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute})
  }
}
