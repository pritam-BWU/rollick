// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {


//   activeDropdown: string | null = null;

//   toggle(menu: string) {

//     if (this.activeDropdown === menu) {
//       this.activeDropdown = null;
//     } else {
//       this.activeDropdown = menu;
//     }

//   }

//   changeTheme() {
//     document.body.classList.toggle('dark-theme');
//   }

// }


import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentDate: Date = new Date();
  private timer: any;

  @Input() isSidebarCollapsed: boolean = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  activeDropdown: string | null = null;
  showPasswordPopup = false;

  notifications = [
    { id: 1, title: 'New Ticket Assigned', message: 'You have been assigned ticket #1234', time: '5m ago', type: 'info', icon: '🎫' },
    { id: 2, title: 'Priority Update', message: 'Ticket #5678 priority changed to High', time: '12m ago', type: 'warning', icon: '⚠' },
    { id: 3, title: 'Comment Received', message: 'Vijay Kumar added a comment to your ticket', time: '1h ago', type: 'comment', icon: '💬' },
    { id: 4, title: 'System Alert', message: 'Maintenance scheduled for tonight at 11 PM', time: '3h ago', type: 'error', icon: '⚙' }
  ];

  toggle(menu: string) {
    this.activeDropdown = this.activeDropdown === menu ? null : menu;
  }

  clearNotification(id: number, event: MouseEvent) {
    event.stopPropagation();
    this.notifications = this.notifications.filter(n => n.id !== id);
  }

  // changeTheme() {
  //   document.body.classList.toggle('dark-theme');
  // }

  changeTheme(theme:string){
    this.themeService.changeTheme(theme);
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  openPasswordPopup(){
    this.showPasswordPopup=true
  }

  closePasswordPopup(){
    this.showPasswordPopup=false
  }

}