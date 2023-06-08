import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    LandingPageComponent,
    LoginComponent,
    ForgotComponent,
    VerifyEmailComponent,
    ResetPasswordComponent
  ],

  imports: [
    CommonModule,
    OnboardingRoutingModule,
    ReactiveFormsModule

  ],

  exports: [
    LandingPageComponent
  ]
})

export class OnboardingModule { }
