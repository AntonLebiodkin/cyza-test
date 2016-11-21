import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Headers } from "@angular/http";

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  private loggedIn = false;
  authURL: string = 'http://localhost:4042/api/v1/auth/token';
  CLIENTID: string = 'a823jkas87y3kjakjhsd';
  CLIENTSECRET: string = 'dksu287aokjfaouiusdia7127a5skd';

  constructor(private http: Http, private router: Router) {
    // set token if saved in local storage:
    this.loggedIn = !!localStorage.getItem('id_token');
  }

  login(username, password): Observable<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body = JSON.stringify({
      client_id: this.CLIENTID,
      client_secret: this.CLIENTSECRET,
      grant_type: 'password',
      username: username,
      password: password
    });
    return this.http.post(this.authURL, body, { headers })
      .map(res => res.json())
      .map((response: any) => {
        // login successful if there's a jwt token in the response
        let token = response.access_token;
        let expires_in = response.expires_in;
        if (token) {
          localStorage.setItem('id_token', token);
          localStorage.setItem('expires_in', expires_in);
          this.loggedIn = true;
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      })
  }

  // This method will log the use out
  logout(): void {
    // clear token remove user from local storage to log user out
    this.loggedIn = null;
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_in');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
