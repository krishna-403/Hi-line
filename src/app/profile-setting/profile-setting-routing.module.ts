import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSettingComponent } from './profile-setting/profile-setting.component';
import { LoginAuthGuard } from '../guard/login-auth.guard';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileSettingComponent,
    canActivate: [LoginAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileSettingRoutingModule { }
