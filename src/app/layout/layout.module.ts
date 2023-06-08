import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent
  ],

  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})

export class LayoutModule { }
