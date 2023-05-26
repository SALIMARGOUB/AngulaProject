import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './sign-up/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [

  { path: 'sign-up', component: SignupComponent },
  { path: 'user-profile', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
