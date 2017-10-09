import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from "./../user/user.service";

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  @Output() sidenav = new EventEmitter<any>();


   folders = [
	    {
	      name: 'Photos',
	      updated: new Date('1/1/16'),
	    },
	    {
	      name: 'Recipes',
	      updated: new Date('1/17/16'),
	    },
	    {
	      name: 'Work',
	      updated: new Date('1/28/16'),
	    }
	  ];
	  notes = [
	    {
	      name: 'Vacation Itinerary',
	      updated: new Date('2/20/16'),
	    },
	    {
	      name: 'Kitchen Remodel',
	      updated: new Date('1/18/16'),
	    }
	  ];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
