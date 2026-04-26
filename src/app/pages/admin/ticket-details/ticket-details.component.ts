import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminCreateTicketDrawerComponent } from '../ticket-list/admin-create-ticket-drawer/admin-create-ticket-drawer.component';
import { AddAssigneeComponent } from './add-assignee/add-assignee.component';
import { AssignTicketComponent } from './assign-ticket/assign-ticket.component';
import { TicketRatingComponent } from '../ticket-list/ticket-rating/ticket-rating.component';
import { EscalateTicketComponent } from './escalate-ticket/escalate-ticket.component';
import { RejectTicketComponent } from './reject-ticket/reject-ticket.component';

@Component({
  selector: 'app-admin-ticket-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, AddAssigneeComponent, AssignTicketComponent, TicketRatingComponent, EscalateTicketComponent, RejectTicketComponent, AdminCreateTicketDrawerComponent],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent implements OnInit {
  ticket: any = null;
  ticketId: string | null = null;
  isAssigneeModalOpen: boolean = false;
  isAssignModalOpen: boolean = false;
  isRatingModalOpen: boolean = false;
  isEscalateModalOpen: boolean = false;
  isRejectModalOpen: boolean = false;
  isCreateDrawerOpen: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.ticketId = this.route.snapshot.paramMap.get('id');
    // Mock data
    this.ticket = {
      id: this.ticketId || 'TKT-2024-001',
      title: 'Equipment Inspection',
      description: 'Complete monthly safety inspection for production line A including hydraulic systems, electrical components, and safety mechanisms.',
      status: 'In Progress',
      priority: 'High',
      createdBy: 'Rajesh Kumar',
      assignedTo: 'Arjun Sharma',
      team: 'Maintenance Team',
      startDate: '25/02/2026',
      endDate: '28/02/2026',
      category: 'Maintenance'
    };
  }

  onBack() {
    this.router.navigate(['/admin/ticket-list']);
  }

  openCreateTicketDrawer() {
    this.isCreateDrawerOpen = true;
  }

  closeCreateTicketDrawer() {
    this.isCreateDrawerOpen = false;
  }

  openAssigneeModal() {
    this.isAssigneeModalOpen = true;
  }

  onAssigneeAdded(name: string) {
    console.log('New assignee added:', name);
    this.isAssigneeModalOpen = false;
  }

  openAssignModal() {
    this.isAssignModalOpen = true;
  }

  onTicketAssigned(name: string) {
    console.log('Ticket reassigned to:', name);
    this.isAssignModalOpen = false;
  }

  openRatingModal() {
    this.isRatingModalOpen = true;
  }

  handleRatingSubmit(data: any) {
    console.log('Ticket Rated & Closed from Details Page:', data, this.ticket);
    // Logic to close the ticket in the backend would go here
    this.isRatingModalOpen = false;
  }

  openEscalateModal() {
    this.isEscalateModalOpen = true;
  }

  handleEscalateSubmit(data: any) {
    console.log('Ticket Escalated:', data, this.ticket);
    // Logic to update ticket status to "Escalated" would go here
    this.isEscalateModalOpen = false;
  }

  openRejectModal() {
    this.isRejectModalOpen = true;
  }

  handleRejectSubmit(data: any) {
    console.log('Ticket Rejected:', data, this.ticket);
    // Logic to update ticket status to "Rejected" would go here
    this.isRejectModalOpen = false;
  }
}
