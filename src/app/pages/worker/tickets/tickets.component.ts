import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateTicketDrawerComponent } from '../../../shared/components/create-ticket-drawer/create-ticket-drawer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, RouterModule, CreateTicketDrawerComponent, FormsModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
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
