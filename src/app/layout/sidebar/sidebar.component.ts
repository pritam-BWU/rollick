import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() isCollapsed = false;
  openedMenu: number | null = null;
  @Output() sidebarToggle = new EventEmitter<boolean>();

  constructor(private router: Router) {
    // Auto-expand menu based on current route
    this.router.events.subscribe(() => {
      this.expandActiveMenu();
    });
  }

  ngOnInit() {
    this.expandActiveMenu();
  }

  private expandActiveMenu() {
    const currentRoute = this.router.url;
    this.menuList.forEach((menu, index) => {
      if (menu.submenus) {
        const hasActiveChild = menu.submenus.some(sub => sub.route && currentRoute.includes(sub.route));
        if (hasActiveChild) {
          this.openedMenu = index;
        }
      }
    });
  }

  menuList: Menu[] = [
    {
      name: 'Dashboard',
      // route: 'admin/dashboard',
      iconType: 'home',
    },
    // {
    //   name: 'User',
    //   iconType: 'user',
    //   submenus: [
    //     { name: 'Dashboard', route: '/user/dashboard' },
    //     { name: 'My Tickets', route: '/user/my-tickets' },
    //     { name: 'Reports', route: '/user/reports' }
    //   ]
    // },
    {
      name: 'Tickets',
      iconType: 'ticket',
      submenus: [
        //{ name: 'Dashboard', route: '/admin/dashboard' },
        { name: 'Create Tickets', route: '/user/create-ticket' },
        { name: 'Ticket History', route: '/user/ticket-history' },
        //{ name: 'Escalation', route: '/admin/escalation' }
      ]
    },
    {
      name: 'Configuration',
      iconType: 'settings',
      submenus: [
        { name: 'Master Data' },
        { name: 'Role & Permission' },
        { name: 'Master Data Mapping' }
      ]
    },
    {
      name: 'Reports',
      // route: 'admin/reports',
      iconType: 'reports',
    },
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.sidebarToggle.emit(this.isCollapsed);
  }

  toggleMenu(index: number) {
    if (this.openedMenu === index) {
      this.openedMenu = null;
    } else {
      this.openedMenu = index;
    }
  }
}

interface SubMenu {
  name: string;
  route?: string;
}

interface Menu {
  name: string;
  iconType: string;
  route?: string;
  submenus?: SubMenu[];
}