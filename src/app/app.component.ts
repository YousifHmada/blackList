import { Component, OnInit } from '@angular/core';
import { UserService } from "./user/user.service";
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public snackBar: MdSnackBar, private userService: UserService) {}

  ngOnInit() {
    this.userService.attemptLogin();
    this.userService.afterOperation.subscribe(
    	(message)=>this.openSnackBar(message)
    );
  }

  openSnackBar(message) {
    this.snackBar.open(message,"", {
      duration: 4000,
    });
  }

}