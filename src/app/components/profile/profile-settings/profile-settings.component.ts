import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Passwords} from "../../../models/passwords.model";

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  passwords: Passwords;
  constructor() { }

  ngOnInit() {
  }


}
