import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { UserMasterComponent } from './user-master/user-master.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
   { path: 'member_profile', data: {breadcrumb: 'Member Profile'},  component: MemberProfileComponent  },
   { path: 'user_master', data: {breadcrumb: 'User Master'},  component: UserMasterComponent  },
  { path: '**', redirectTo: '/notfound' }
])],exports: [RouterModule]
})
export class RegistrationRoutingModule { }
