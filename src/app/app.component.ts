import { Component } from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  // private userService: UserService


  // constructor(userService:UserService) {
  //   this.userService = userService;            long hand structure
  //   this.userService.doSomeStuff();
  // }

  // constructor(private userService: UserService) {
  //   this.userService.doSomeStuff();                             //short hand structure
  // }

}
