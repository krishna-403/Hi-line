import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingModule } from './onboarding/onboarding.module';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { InventoryModule } from './inventory/inventory.module';
import { UserManagementModule } from './user-management/user-management.module';
import { PriceModule } from './price/price.module';
import { AreaModule } from './area/area.module';
import { ToolsModule } from './tools/tools.module';
import { SharedModule } from './shared/shared.module';
import { ProfileSettingModule } from './profile-setting/profile-setting.module';
@NgModule({
  declarations: [
    AppComponent,

    // LoginComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    OnboardingModule,
    LayoutModule,
    HttpClientModule,
    InventoryModule,
    UserManagementModule,
    PriceModule,
    AreaModule,
    ToolsModule,
    SharedModule,
    ProfileSettingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
