import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {UserProfile} from "../../../models/user-profile.model";

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  @Input() userProfile: UserProfile = new UserProfile();
  constructor() { }

  ngOnInit() {

  }

}
