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
    { path: '/parts', title: 'Liste des partenariats',  icon: 'format_list_bulleted', class: '', subMenu: [
            {
                path: '/test/sous-menu-1',
                title: 'Sous-menu 1',
                icon: 'sub_menu_icon_1',
                class: ''
            },
            {
                path: '/test/sous-menu-2',
                title: 'Sous-menu 2',
                icon: 'sub_menu_icon_2',
                class: ''
            }
            // Ajoutez d'autres sous-menus si nécessaire
        ] },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
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
