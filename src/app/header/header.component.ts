import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from "./../user/user.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sidenav = new EventEmitter<any>();

  constructor(public userService: UserService, private router: Router) { }

  myForm : FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      "search" : new FormControl()
    });
  	this.userService.tryLogin.subscribe(
  		(user)=>{
  			
  		},
  		(e)=>console.log('login attempt failed'+e)
  	);
  }

  onSubmit(){
    this.router.navigate(['/search',this.myForm.value.search,'shows']);
    this.myForm.value.search = '';
  }

}
