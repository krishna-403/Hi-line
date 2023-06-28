import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private routes: Router) { }
  profile: boolean = false;
  toggle() {
    this.profile = !this.profile;
  }

  logout() {
    localStorage.removeItem('token');
    this.routes.navigate(["/"])
    localStorage.removeItem('clicked_menu');
  }
}
