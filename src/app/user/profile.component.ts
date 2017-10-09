import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from "./user.service";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  user = null;
  sub: Subscription;


  ngOnInit() {
  	this.sub = this.activatedRoute.params.subscribe(
      (params)=> {
        this.userService.getProfile(params['id']).subscribe(
          (user)=>this.user=user,
          (error)=>console.log(error)
        );
      },
      (e)=>console.log(e)
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
