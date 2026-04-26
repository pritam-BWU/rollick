import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateTicketDrawerComponent } from '../components/create-ticket-drawer/create-ticket-drawer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-tickets',
  standalone: true,
  imports: [CommonModule, RouterModule, UserCreateTicketDrawerComponent, FormsModule],
  templateUrl: './my-tickets.component.html',
  styleUrl: './my-tickets.component.css'
})
export class MyTicketsComponent {
  isCreateDrawerOpen: boolean = false;
  isFilterDropdownOpen = false;

  selectedFilters = {
    date: false,
    id: false
  };

  kpiData = [
    { label: 'Total Tickets', value: '124', trend: '+12% vs last month', trendClass: 'up', icon: 'total' },
    { label: 'Open Tickets', value: '45', trend: 'Pending review', trendClass: '', icon: 'open' },
    { label: 'In-Progress', value: '32', trend: 'Active now', trendClass: '', icon: 'progress' },
    { label: 'Closed', value: '47', trend: '-5% vs last month', trendClass: 'down', icon: 'closed' }
  ];

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
