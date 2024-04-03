import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndividualAccountComponent } from './individual-account/individual-account.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { VerificationComponent } from './complete-profile/verification/verification.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndividualAccountComponent,
    JoinUsComponent,
    CompleteProfileComponent,
    VerificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
