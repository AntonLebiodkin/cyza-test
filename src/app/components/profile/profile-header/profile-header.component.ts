import {Component, OnInit, SimpleChange} from '@angular/core';
import { RatingModule } from "ng2-rating";
import {UserProfile} from "../../../models/user-profile.model";
import {Input} from "@angular/core/src/metadata/directives";
import {ProfileService} from "../../../services/profile.service";

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent{
  @Input() userProfile: UserProfile = new UserProfile();
  @Input() apiFailed: boolean = false;
  constructor() { }
}
