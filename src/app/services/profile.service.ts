import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { UserProfile } from "../models/user-profile.model";

import 'rxjs/add/operator/toPromise';
import { AuthService } from "./auth.service";

@Injectable()
export class ProfileService {
  private profileUrl = 'http://localhost:4042/api/v1/profile';
  private changePasswordUrl = 'http://localhost:4021/api/v1/profile/changepassword';

  constructor(
    private http: Http,
    private authService: AuthService
  ) { }

  getUserProfile() {
    let headers = new Headers({ 'authorization': 'Bearer ' + this.authService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http
        .get(this.profileUrl, options)
        .toPromise()
        .then(response=>response.json() as UserProfile)
        .catch(this.handleError);
  }

  changeUserPassword() {

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
