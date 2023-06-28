import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SideMenuService } from 'src/app/services/side-menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  sideNavMenu: any
  currentIcon: any = 1;

  ngOnInit(): void {
    this.get_side_icon();
    this.currentIcon = localStorage.getItem('clicked_menu');
  }

  constructor(private side_nav: SideMenuService) { }

  get_side_icon() {
    this.side_nav.side_menu_icon().subscribe((result) => {
      this.sideNavMenu = result;
    });
  }

  // abc: any = localStorage.getItem('clicked_menu');
  changeColor(icon: any) {
    this.currentIcon = icon;
    console.log(this.currentIcon)
    localStorage.setItem('clicked_menu', this.currentIcon)

  }

}
