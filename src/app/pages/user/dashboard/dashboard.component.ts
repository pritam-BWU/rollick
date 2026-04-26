import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleService } from '../../../services/page-title.service';
import { UserCreateTicketDrawerComponent } from '../components/create-ticket-drawer/create-ticket-drawer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, UserCreateTicketDrawerComponent, RouterModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  subtitle = 'Overview of your operations and performance';

  stats = [
    { title: 'Total Tickets', value: '24', trend: '+12%', trendPositive: true, iconClass: 'icon-blue', iconType: 'lightning' },
    { title: 'Open Tickets', value: '156', trend: '+19%', trendPositive: true, iconClass: 'icon-green', iconType: 'trend-up' },
    { title: 'In Progress Tickets', value: '18', trend: '+5%', trendPositive: true, iconClass: 'icon-purple', iconType: 'monitor' },
    { title: 'Closed Tickets', value: '42', trend: '-3%', trendPositive: false, iconClass: 'icon-yellow', iconType: 'clipboard' },
    // { title: 'Efficiency Index', value: '94%', trend: '+2%', trendPositive: true, iconClass: 'icon-cyan', iconType: 'chart' }
  ];

  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit(): void {
    this.pageTitleService.setTitle('Dashboard');
    this.pageTitleService.setSubtitle(this.subtitle);
  }

  isCreateDrawerOpen = false;
  isFilterDropdownOpen = false;

  selectedFilters = {
    date: false,
    id: false
  };

  openCreateTicketDrawer() {
    this.isCreateDrawerOpen = true;
  }

  closeCreateTicketDrawer() {
    this.isCreateDrawerOpen = false;
  }

  toggleFilterDropdown() {
    this.isFilterDropdownOpen = !this.isFilterDropdownOpen;
  }

  applyFilters() {
    console.log('Applying filters:', this.selectedFilters);
    this.isFilterDropdownOpen = false;
  }
}
