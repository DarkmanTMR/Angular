import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {IUser} from "../../models/iuser";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  @Input()
  users: IUser[];
  user: IUser;

  Form: FormGroup = new FormGroup(
    {

    }
  );

  constructor(private userService: UserService, private router: Router,private activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  userDetails() {
    this.user = this.router.getCurrentNavigation()?.extras.state as IUser;
  }
}
