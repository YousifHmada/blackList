import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse, LoginOptions } from 'ngx-facebook';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { FormControl } from "@angular/forms";
import { Http, Response } from "@angular/http";
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  movies: FormControl;
  filteredMovies: Observable<any[]>;


  afterChange(e) {
    console.log('afterChange');
  }

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4,dots: true,
  infinite: true};
  resultsExist = false;
  loggedIn = false;
  image = null;
  name = null;
  cover = null;

  openSnackBar() {
    this.snackBar.open("Please Login to enjoy the full features","", {
      duration: 8000,
    });
  }


  constructor(public snackBar: MdSnackBar, private fb: FacebookService,private http:Http) {

    this.movies = new FormControl();
    this.movies.valueChanges
    .debounceTime(500)
    .subscribe(
      ()=>{
        let data = this.movies.value;
        this.filteredMovies = this.http.get('https://api.themoviedb.org/3/search/multi?api_key=feed0cd312ab707673bf5186ef09fd63&language=en-US&query='+data+'&page=1&include_adult=false')
            .map((response : Response)=>{
              console.log(response.json());
              if(response.json().results.length > 0){
                this.resultsExist = true;
              }else{
                this.resultsExist = false;
              }
              return response.json().results;
          });
      }
    )
 

    let initParams: InitParams = {
      appId: '1817861361839009',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);

  }

  ngOnInit(){
    this.openSnackBar();
  }

  /**
   * Login with minimal permissions. This allows you to see their public profile only.
   */
  login() {
    this.fb.login()
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
      })
      .catch(this.handleError);
  }

  /**
   * Login with additional permissions/options
   */
  loginWithOptions() {

    const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list'
    };

    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
        this.getProfile();
      })
      .catch(this.handleError);

  }

  getLoginStatus() {
    this.fb.getLoginStatus()
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
  }


  /**
   * Get the user's profile
   */
  getProfile() {
    this.fb.api('/me?fields=id,picture.height(300).width(300),name,cover')
      .then((res: any) => {
        console.log(res);
        this.image = res.picture.data.url;
        this.cover = res.cover.source;
        this.name =  res.name;
        this.loggedIn = true;
      })
      .catch(this.handleError);
  }

  logout() {
    localStorage.clear();
    this.loggedIn = false;
    this.image= null;
    this.name = null;
    this.cover = null;
  }


  private handleError(error) {
    console.error('Error processing action', error);
}

}