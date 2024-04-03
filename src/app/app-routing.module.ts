import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualAccountComponent } from './individual-account/individual-account.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { CompleteProfileComponent } from './complete-profile/complete-profile.component';
import { VerificationComponent } from './complete-profile/verification/verification.component';

const routes: Routes = [
  {
    path: '',
    component: JoinUsComponent,
  },
  { path: 'individual', component: IndividualAccountComponent },
  {
    path: 'complete',
    component: CompleteProfileComponent,
    children: [
      {
        path: 'complete/:id',
        component: VerificationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
