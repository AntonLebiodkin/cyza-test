import {Component, OnInit, OnDestroy} from '@angular/core';
import { User } from "../../models/user.model";
import { NgForm } from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import { Router } from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  error: string = '';
  apiError: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    //REMOVE TOKEN IF VISITED LOGIN PAGE
    this.authService.logout();
  }

  login(form: NgForm) {
      return  this.authService.login(this.user.username, this.user.password)
                  .toPromise()
                  .then(result => {
                    console.log(result);
                    if (result === true) {
                      this.router.navigate(['/']);
                    } else {
                      this.error = 'Username or password is incorrect';
                    }
                  })
                  .catch(this.handleApiError);
  }

  private handleApiError(error: any): void {
    this.apiError = true;
    console.error('Api failed: ', error);
  }
}
