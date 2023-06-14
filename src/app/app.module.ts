import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingModule } from './onboarding/onboarding.module';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { InventoryModule } from './inventory/inventory.module';

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
    InventoryModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
