
import { Routes } from '@angular/router';
import { ProfileInfoComponent } from "./profile-info/profile-info.component";
import { ProfileSettingsComponent } from "./profile-settings/profile-settings.component";
import {AuthGuard} from "../../guards/auth-guard.service";
import {ProfileEditComponent} from "./profile-edit/profile-edit.component";

export const PROFILE_ROUTES: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: 'info', component: ProfileInfoComponent },
  { path: 'settings', component: ProfileSettingsComponent},
  { path: 'info/edit', component: ProfileEditComponent}
];
