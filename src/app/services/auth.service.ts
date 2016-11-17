import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  public token: string = '';
  authURL: string = 'http://localhost:4042/api/v1/auth/token';
  CLIENTID: string = 'a823jkas87y3kjakjhsd';
  CLIENTSECRET: string = 'dksu287aokjfaouiusdia7127a5skd';
  constructor(private http: Http, private router: Router) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
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
    return this.http.post(this.authURL, body, { headers }).map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().access_token;
        if (token) {
          // set token property
          this.token = token;
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          // return true to indicate successful login
          return true;
        } else {
          console.log(response.json());
          // return false to indicate failed login
          return false;
        }
      }).catch((error:any) => Observable.throw(error.json().error || 'Wrong login or/and password'))
  }

  // This method will log the use out
  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }



}
