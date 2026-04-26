import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCreateTicketDrawerComponent } from './admin-create-ticket-drawer/admin-create-ticket-drawer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TicketRatingComponent } from './ticket-rating/ticket-rating.component';

export interface Ticket {
  id: string;
  name: string;
  description: string;
  createdBy: string;
  createdDate: string;
  startDate: string;
  endDate: string;
  dueStatus: string;
  days: number;
  status: string;
  priority: string;
  assignedTo: string;
  department: string;
  category: string;
  selected?: boolean;
}

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [CommonModule, RouterModule, AdminCreateTicketDrawerComponent, FormsModule, TicketRatingComponent],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css',
})
export class TicketListComponent {
  isCreateDrawerOpen: boolean = false;
  selectAll: boolean = false;
  isFilterDropdownOpen = false;
  activeActionMenu: string | null = null;
  
  isRatingModalOpen = false;
  selectedTicketForRating: any = null;

  selectedFilters = {
    date: false,
    id: false
  };

  tickets: Ticket[] = [
    {
      id: 'TKT-2024-001',
      name: 'Equipment Inspection - Line A',
      description: 'Complete monthly safety inspection',
      createdBy: 'Rajesh Kumar',
      createdDate: '20/02/2026',
      startDate: '25/02/2026',
      endDate: '27/02/2026',
      dueStatus: 'Overdue',
      days: 26,
      status: 'Assigned',
      priority: 'High',
      assignedTo: 'Arjun Sharma',
      department: 'SMS',
      category: 'Safety Inspection',
      selected: false
    },
    {
      id: 'TKT-2024-002',
      name: 'Maintenance Report Review',
      description: 'Review and approve maintenance',
      createdBy: 'Priya Patel',
      createdDate: '22/02/2026',
      startDate: '26/02/2026',
      endDate: '10/02/2026',
      dueStatus: 'Overdue',
      days: 43,
      status: 'Assigned',
      priority: 'Mid',
      assignedTo: 'Maintenance Team',
      department: 'RM',
      category: 'Maintenance',
      selected: false
    },
    {
      id: 'TKT-2024-003',
      name: 'Update Equipment Records',
      description: 'Update equipment database',
      createdBy: 'Vikram Singh',
      createdDate: '23/02/2026',
      startDate: '27/02/2026',
      endDate: '02/03/2026',
      dueStatus: 'Overdue',
      days: 23,
      status: 'Draft',
      priority: 'Low',
      assignedTo: 'Kavya Reddy',
      department: 'GI',
      category: 'Documentation',
      selected: false
    },
    {
      id: 'TKT-2024-004',
      name: 'Safety Training Documentation',
      description: 'Complete documentation for ...',
      createdBy: 'Rajesh Kumar',
      createdDate: '24/02/2026',
      startDate: '01/03/2026',
      endDate: '15/02/2026',
      dueStatus: 'Overdue',
      days: 38,
      status: 'Close',
      priority: 'Mid',
      assignedTo: 'HR Department',
      department: 'CCM',
      category: 'Training',
      selected: false
    },
    {
      id: 'TKT-2024-005',
      name: 'Production Line Optimization',
      description: 'Analyze and implement efficiency',
      createdBy: 'Priya Patel',
      createdDate: '25/02/2026',
      startDate: '05/03/2026',
      endDate: '26/02/2026',
      dueStatus: 'Overdue',
      days: 27,
      status: 'Assigned',
      priority: 'High',
      assignedTo: 'Operations Team',
      department: 'Project',
      category: 'Production',
      selected: false
    }
  ];

  openCreateTicketDrawer() {
    this.isCreateDrawerOpen = true;
  }

  closeCreateTicketDrawer() {
    this.isCreateDrawerOpen = false;
  }

  toggleAll() {
    this.tickets.forEach(ticket => ticket.selected = this.selectAll);
  }

  onTicketSelect() {
    this.selectAll = this.tickets.every(ticket => ticket.selected);
  }

  get selectedCount(): number {
    return this.tickets.filter(t => t.selected).length;
  }

  deleteSelected() {
    if (confirm(`Are you sure you want to delete ${this.selectedCount} tickets?`)) {
      this.tickets = this.tickets.filter(t => !t.selected);
      this.selectAll = false;
    }
  }

  exportSelected() {
    alert(`Exporting ${this.selectedCount} tickets to CSV...`);
  }

  clearSelection() {
    this.tickets.forEach(t => t.selected = false);
    this.selectAll = false;
  }

  toggleFilterDropdown() {
    this.isFilterDropdownOpen = !this.isFilterDropdownOpen;
  }

  applyFilters() {
    console.log('Applying filters:', this.selectedFilters);
    this.isFilterDropdownOpen = false;
  }

  toggleActionMenu(ticketId: string, event: MouseEvent) {
    event.stopPropagation();
    this.activeActionMenu = this.activeActionMenu === ticketId ? null : ticketId;
  }

  onAction(action: string, ticket: Ticket, event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    this.activeActionMenu = null;
    
    console.log(`[Admin Ticket List] Action selected: ${action}`, ticket);

    if (action === 'complete') {
      console.log('[Admin Ticket List] Triggering Rating Modal');
      this.selectedTicketForRating = ticket;
      this.isRatingModalOpen = true;
    } else {
      // Handle other actions
      console.log(`[Admin Ticket List] Action: ${action} - No modal needed`);
    }
  }

  handleRatingSubmit(data: any) {
    console.log('Ticket Rated & Closed:', data, this.selectedTicketForRating);
    // Here you would typically call a service to update ticket status
    this.isRatingModalOpen = false;
    this.selectedTicketForRating = null;
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.activeActionMenu = null;
  }
}
