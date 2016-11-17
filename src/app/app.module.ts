import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileHeaderComponent } from './components/profile/profile-header/profile-header.component';
import { ProfileInfoComponent } from './components/profile/profile-info/profile-info.component';
import { ProfileSettingsComponent } from './components/profile/profile-settings/profile-settings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CyzaTestRoutingModule } from './app-routing.module';
import { RatingModule } from "ng2-rating";
import { ProfileService } from "./services/profile.service";
import { AuthService } from "./services/auth.service";
import {AuthGuard} from "./guards/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileHeaderComponent,
    ProfileInfoComponent,
    ProfileSettingsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CyzaTestRoutingModule,
    RatingModule
  ],
  providers: [
    ProfileService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
