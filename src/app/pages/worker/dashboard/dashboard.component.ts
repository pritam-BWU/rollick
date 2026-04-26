import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleService } from '../../../services/page-title.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreateTicketDrawerComponent } from '../../../shared/components/create-ticket-drawer/create-ticket-drawer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, CreateTicketDrawerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  subtitle = 'Overview of your operations and performance';

  stats = [
    { title: 'Assigned Tickets', value: '24', trend: '+12%', trendPositive: true, iconClass: 'icon-blue', iconType: 'lightning' },
    { title: 'In Progress Tickets', value: '14', trend: '+19%', trendPositive: true, iconClass: 'icon-green', iconType: 'trend-up' },
    { title: 'Completed Tickets', value: '05', trend: '+5%', trendPositive: true, iconClass: 'icon-purple', iconType: 'monitor' },
    { title: 'Pending Tickets', value: '03', trend: '-3%', trendPositive: false, iconClass: 'icon-yellow', iconType: 'clipboard' },
    { title: 'Overdue Tickets', value: '02', trend: '-3%', trendPositive: false, iconClass: 'icon-yellow', iconType: 'clipboard' },
  ];

  isCreateDrawerOpen = false;
  isFilterDropdownOpen = false;

  selectedFilters = {
    date: false,
    id: false
  };

  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit(): void {
    this.pageTitleService.setTitle('Worker Dashboard');
    this.pageTitleService.setSubtitle(this.subtitle);
  }

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
