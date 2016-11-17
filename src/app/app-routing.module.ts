import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from "./components/profile/profile.component";
import { LoginComponent } from "./components/login/login.component";
import { PROFILE_ROUTES } from "./components/profile/profile-routing";
import { AuthGuard } from "./guards/auth-guard.service";

const routes: Routes = [
  { path: '', redirectTo: '/profile/info', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'profile', redirectTo: 'profile/info'},
  { path: 'profile', component: ProfileComponent, children: PROFILE_ROUTES, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class CyzaTestRoutingModule { }
