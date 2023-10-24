import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    subMenu?: RouteInfo[]; // Ajout du champ pour les sous-menus

}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/parts', title: 'Liste des partenariats',  icon: 'format_list_bulleted', class: ''},
    { path: '/maps', title: 'Blog', icon: 'subject', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }
    isDropdownActive: boolean = false;
    toggleDropdown(): void {
        this.isDropdownActive = !this.isDropdownActive;
    }


    ngOnInit() {
      var new_color = $(this).data('color');

      this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
