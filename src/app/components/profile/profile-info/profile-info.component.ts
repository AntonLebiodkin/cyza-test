import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {UserProfile} from "../../../models/user-profile.model";
import { ProfileService } from "../../../services/profile.service";

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  loaded: boolean = false;
  userProfile: UserProfile = new UserProfile();

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.userProfile = this.profileService.userProfile;
    this.loaded = true
  }
}
