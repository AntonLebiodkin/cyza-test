import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { AuthService } from "./auth.service";

import { UserProfile } from "../models/user-profile.model";

@Injectable()
export class ProfileService {
  private profileUrl: string = 'http://localhost:4042/api/v1/profile';
  private changePasswordUrl: string = 'http://localhost:4042/api/v1/profile/changepassword';

  private authToken: string;
  userProfile: UserProfile;

  constructor(private http: Http) {
    this.authToken = localStorage.getItem('id_token');
  }

  getUserProfile() {
    let headers = new Headers({ 'authorization': 'Bearer ' + this.authToken });
    let options = new RequestOptions({ headers: headers });
    return this.http
        .get(this.profileUrl, options)
        .toPromise()
        .then(response => {
          this.userProfile = response.json() as UserProfile;
          return this.userProfile;
        })
        .catch(this.handleError);
  }

  changeUserPassword(oldPassword: string, newPassword: string) {
    let headers = new Headers({ 'authorization': 'Bearer ' + this.authToken });
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify({
        oldPassword: oldPassword,
        newPassword: newPassword
    });
    return this.http
      .put(this.changePasswordUrl, body, options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  updateProfile(userProfile: UserProfile) {
    let headers = new Headers({ 'authorization': 'Bearer ' + this.authToken });
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(userProfile);
    return this.http
      .patch(this.profileUrl, body, options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
