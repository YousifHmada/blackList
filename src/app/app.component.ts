import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse, LoginOptions } from 'ngx-facebook';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loggedIn = false;
  image = null;
  name = null;
  cover = null;

  constructor(private fb: FacebookService) {

    let initParams: InitParams = {
      appId: '1817861361839009',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);

  }

  ngOnInit(){
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
    this.fb.api('/me?fields=id,picture,name,cover')
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
  }


  private handleError(error) {
    console.error('Error processing action', error);
}

}