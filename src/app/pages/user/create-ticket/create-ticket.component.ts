import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateTicketDrawerComponent } from '../components/create-ticket-drawer/create-ticket-drawer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-create-ticket',
  standalone: true,
  imports: [CommonModule, RouterModule, UserCreateTicketDrawerComponent, FormsModule, ModalComponent],
  templateUrl: './create-ticket.component.html',
  styleUrl: './create-ticket.component.css'
})
export class CreateTicketComponent {
  activeTab: 'my' | 'assign' = 'my';
  isCreateDrawerOpen: boolean = false;
  isFilterDropdownOpen = false;
  activeActionDropdown: string | null = null;

  selectedFilters = {
    date: false,
    id: false
  };

  myKpiData = [
    { label: 'Total Tickets', value: '124', trend: '+12% vs last month', trendClass: 'up', icon: 'total' },
    { label: 'Open Tickets', value: '45', trend: 'Pending review', trendClass: '', icon: 'open' },
    { label: 'In-Progress', value: '32', trend: 'Active now', trendClass: '', icon: 'progress' },
    { label: 'Closed', value: '47', trend: '-5% vs last month', trendClass: 'down', icon: 'closed' }
  ];

  assignKpiData = [
    { label: 'Assigned to Me', value: '56', trend: '+8% vs last week', trendClass: 'up', icon: 'total' },
    { label: 'Pending Action', value: '18', trend: 'Needs attention', trendClass: 'down', icon: 'open' },
    { label: 'Work in Progress', value: '24', trend: 'On schedule', trendClass: '', icon: 'progress' },
    { label: 'Completed', value: '14', trend: 'Ready for review', trendClass: 'up', icon: 'closed' }
  ];

  get kpiData() {
    return this.activeTab === 'my' ? this.myKpiData : this.assignKpiData;
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

  toggleActionDropdown(ticketId: string, event: Event) {
    event.stopPropagation();
    this.activeActionDropdown = this.activeActionDropdown === ticketId ? null : ticketId;
  }

  @HostListener('document:click')
  closeAllDropdowns() {
    this.activeActionDropdown = null;
    this.isFilterDropdownOpen = false;
  }

  // Generic Action Modal Logic
  isGenericModalOpen = false;
  genericActionType = '';
  genericModalTitle = '';
  genericReason = '';
  genericNote = '';

  openGenericModal(actionType: string, ticketId: string) {
    this.genericActionType = actionType;
    this.genericModalTitle = `${actionType}: ${ticketId}`;
    this.genericReason = '';
    this.genericNote = '';
    this.isGenericModalOpen = true;
    this.activeActionDropdown = null; // Close the dropdown menu
  }

  handleGenericSubmit() {
    console.log(`Action ${this.genericActionType} submitted with reason: ${this.genericReason}, note: ${this.genericNote}`);
    this.isGenericModalOpen = false;
  }
}
