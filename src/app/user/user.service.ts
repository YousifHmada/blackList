import { Injectable, EventEmitter } from '@angular/core';
import { FacebookService, InitParams, LoginResponse, LoginOptions } from 'ngx-facebook';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Http, Response, Headers } from "@angular/http";

@Injectable()
export class UserService {

  authUser = null;

  constructor(private fb: FacebookService,	private http:Http) {

    let initParams: InitParams = {
      appId: '1817861361839009',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);

  }

  tryLogin = new EventEmitter<any>();


  afterOperation = new EventEmitter<any>();

  getProfile(id) {
    return this.http.get('https://black-list-movies.herokuapp.com/users/'+id+'/profile')
            .map((result)=>result.json());
  }


  attemptLogin() {
  	const _id  = localStorage.getItem("authUserId");
    const name = localStorage.getItem("authUserName");
    const picture = localStorage.getItem("authUserPicture");
    const authAccessToken = localStorage.getItem("authAccessToken");
    if(_id != null && name != null && picture != null && authAccessToken != null){
    	this.authUser = {
        	"authUserId":_id,
        	"authUserName":name,
        	"authUserPicture":picture,
        	"authAccessToken":authAccessToken		
        }
    }
  }


  logout() {
    localStorage.clear();
    this.afterOperation.emit(this.authUser.authUserName+" logged out successfully");
    this.authUser = null;
  }

  loginWithFacebook() {
  	const loginOptions: LoginOptions = {
      enable_profile_selector: true,
      return_scopes: true,
      scope: 'public_profile,user_friends,email,pages_show_list'
    };
    this.fb.login(loginOptions)
      .then((res: LoginResponse) => {
      	const body = {
      		fbAccessToken: res.authResponse.accessToken
      	};
      	const headers = new Headers({
      		"content-type":"application/json"
      	});
        this.http.post('https://black-list-movies.herokuapp.com/users/login/fb', body, {headers})
        	.subscribe(
        		data=>{
        			const user = data.json();
        			localStorage.setItem("authUserId",user._id);
        			localStorage.setItem("authUserName",user.name);
        			localStorage.setItem("authUserPicture",user.picture);
        			localStorage.setItem("authAccessToken",user.authAccessToken);
        			this.authUser = {
        				"authUserId":user._id,
        				"authUserName":user.name,
        				"authUserPicture":user.picture,
        				"authAccessToken":user.authAccessToken,
        			
        			}
              this.afterOperation.emit(this.authUser.authUserName+" logged in successfully");
        			this.tryLogin.emit()
        		},
        		error=>{
        			this.authUser = null;
        			this.tryLogin.emit();
        		}
        	);
      })
      .catch((e)=> console.log(e));
  	}
}
