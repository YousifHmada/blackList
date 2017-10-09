import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from "./../user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sidenav = new EventEmitter<any>();

  constructor(public userService: UserService) { }

  ngOnInit() {
  	this.userService.tryLogin.subscribe(
  		(user)=>{
  			
  		},
  		(e)=>console.log('login attempt failed'+e)
  	);
  }

}
