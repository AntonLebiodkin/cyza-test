import {Component, OnInit, OnDestroy} from '@angular/core';
import { ProfileHeaderComponent } from './profile-header/profile-header.component'
import { ProfileService } from "../../services/profile.service";
import { UserProfile } from "../../models/user-profile.model";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  userProfile: UserProfile;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getUserProfile()
                       .then(userProfile => {
                         this.userProfile = userProfile;
                       })
  }
  ngOnDestroy() {

  }

}
