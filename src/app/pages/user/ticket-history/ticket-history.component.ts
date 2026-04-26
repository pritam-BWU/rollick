import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-ticket-history',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ModalComponent],
  templateUrl: './ticket-history.component.html',
  styleUrl: './ticket-history.component.css'
})
export class TicketHistoryComponent implements OnInit {
  activeTab: 'my' | 'assign' = 'my';
  isFilterDropdownOpen = false;
  activeActionDropdown: string | null = null;

  selectedFilters = {
    date: false,
    id: false
  };

  myHistoryKpiData = [
    { label: 'Total Resolved', value: '342', trend: '+15% vs last month', trendClass: 'up', icon: 'closed' },
    { label: 'Closed Tickets', value: '289', trend: 'Audit complete', trendClass: '', icon: 'total' },
    { label: 'Reopened', value: '12', trend: '-2% improvement', trendClass: 'up', icon: 'open' },
    { label: 'Satisfaction', value: '4.8', trend: 'High rating', trendClass: 'up', icon: 'progress' }
  ];

  assignHistoryKpiData = [
    { label: 'Total Resolved', value: '156', trend: '+5% vs last week', trendClass: 'up', icon: 'closed' },
    { label: 'Closed by Me', value: '124', trend: 'On schedule', trendClass: '', icon: 'total' },
    { label: 'Avg Closure Time', value: '2.4d', trend: 'Faster response', trendClass: 'up', icon: 'open' },
    { label: 'User Feedback', value: '4.5', trend: 'Good rating', trendClass: '', icon: 'progress' }
  ];

  get kpiData() {
    return this.activeTab === 'my' ? this.myHistoryKpiData : this.assignHistoryKpiData;
  }

  ngOnInit() {}

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
