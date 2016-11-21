import { Component, OnInit } from '@angular/core';
import { UserProfile } from "../../../models/user-profile.model";
import { ProfileService } from "../../../services/profile.service";
import { Address } from "../../../models/address.model";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import {Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  success: boolean = false;
  userProfile: UserProfile = new UserProfile();

  constructor(
    private profileService: ProfileService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userProfile.address = new Address();
    this.userProfile = this.profileService.userProfile;
  }

  editProfile(form: NgForm) {
    this.profileService.updateProfile(this.userProfile)
        .then(res => {
          if (res.success) {
            this.success = true;
            this.router.navigate(['/profile']);
          }
        })
  }

}
