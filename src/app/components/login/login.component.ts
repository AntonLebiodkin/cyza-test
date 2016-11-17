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
export class LoginComponent implements OnInit, OnDestroy {
  user: User = new User();
  loading = false;
  error: string = '';
  subscription: Subscription;
  constructor(private authService: AuthService, private router: Router) { }

  login(form: NgForm) {
      this.loading = true;
      this.subscription = this.authService.login(this.user.username, this.user.password)
                              .subscribe(result => {
                                console.log(result);
                                if (result === true) {
                                  // login successful
                                  this.router.navigate(['/']);
                                } else {
                                  // login failed
                                  this.error = 'Username or password is incorrect';
                                  this.loading = false;
                                }
                              });
}
  ngOnInit() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.subscription = null;
  }

}
