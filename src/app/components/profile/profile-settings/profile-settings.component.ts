import { Component, OnInit } from '@angular/core';
import { Passwords } from "../../../models/passwords.model";
import { NgForm } from "@angular/forms";
import { ProfileService } from "../../../services/profile.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  error: string = '';
  success: boolean = false;
  passwords: Passwords = new Passwords();

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
  }

  changePassword(form: NgForm) {
    if (this.passwords.oldPassword == this.passwords.newPassword) {
      this.error = 'ERROR! New password is equal old password!';
      this.resetPasswordsForm();
      return;
    }
    if (this.passwords.newPassword != this.passwords.confirmNewPassword) {
      this.error = 'ERROR! New password not equal to confirmed password!';
      this.resetPasswordsForm();
      return;
    }

    this.profileService.changeUserPassword(
      this.passwords.oldPassword,
      this.passwords.newPassword
    ).then(res => {
      let result: any = res;
      if (result.error) {
        this.error = result.error_description;
      } else {
        this.success = true;
        setTimeout(() => this.router.navigate(['/profile']), 1000);
      }
    })

  }

  resetPasswordsForm(): void {
    this.passwords.oldPassword = '';
    this.passwords.newPassword = '';
    this.passwords.confirmNewPassword = '';
  }
}
