import {Component, OnInit, OnDestroy} from '@angular/core';
import { ProfileHeaderComponent } from './profile-header/profile-header.component'
import { ProfileService } from "../../services/profile.service";
import { UserProfile } from "../../models/user-profile.model";
import {AuthService} from "../../services/auth.service";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: UserProfile = new UserProfile();
  apiFailed: boolean = false;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    console.log('profile init');
    this.profileService.getUserProfile()
                       .then(userProfile => {
                         this.userProfile = userProfile;
                       }).catch(err => {
                         console.log('API FAILED');
                         this.apiFailed = true;
                       })
  }
}
