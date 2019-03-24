import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// private email = this.userService.authobj.authData.user.email;
  constructor(private userService: UserService) { }
  doAuth(event) {
    this.userService.auth(this.userService.token);
    // this.router.navigateByUrl('home');
  }
  ngOnInit() {
  }

}
