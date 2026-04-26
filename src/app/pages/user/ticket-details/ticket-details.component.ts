import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserCreateTicketDrawerComponent } from '../components/create-ticket-drawer/create-ticket-drawer.component';
import { TicketRatingComponent } from '../../admin/ticket-list/ticket-rating/ticket-rating.component';
import { AssignTicketComponent } from '../../admin/ticket-details/assign-ticket/assign-ticket.component';
import { EscalateTicketComponent } from '../../admin/ticket-details/escalate-ticket/escalate-ticket.component';
import { RejectTicketComponent } from '../../admin/ticket-details/reject-ticket/reject-ticket.component';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-user-ticket-details',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule, 
    UserCreateTicketDrawerComponent,
    TicketRatingComponent,
    AssignTicketComponent,
    EscalateTicketComponent,
    RejectTicketComponent,
    ModalComponent
  ],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent implements OnInit {
  ticket: any = null;
  ticketId: string | null = null;
  isAssignModalOpen: boolean = false;
  isRatingModalOpen: boolean = false;
  isEscalateModalOpen: boolean = false;
  isRejectModalOpen: boolean = false;
  isCreateDrawerOpen: boolean = false;
  from: string | null = null;

  isGenericModalOpen: boolean = false;
  genericModalTitle: string = '';
  genericActionType: string = '';
  genericReason: string = '';
  genericNote: string = '';

  genericReasons: string[] = [
    'Incorrect Information',
    'Incomplete Request',
    'Duplicate Ticket',
    'Out of Scope',
    'Already Resolved',
    'Other'
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.ticketId = this.route.snapshot.paramMap.get('id');
    this.from = this.route.snapshot.queryParamMap.get('from') || 'my';
    
    // Mock mapping to demonstrate different status behaviors
    const statusMap: { [key: string]: string } = {
      'TKT-2024-001': 'Close',
      'TKT-2024-002': 'Reopen',
      'TKT-2024-003': 'Rejected',
      'TKT-2024-004': 'Resolved',
      'TKT-2024-005': 'Accepted',
      'TKT-2024-006': 'Open',
      'TKT-2024-007': 'Reopen',
      'TKT-2024-008': 'Auto Close',
      'TKT-2024-012': 'Resolved',
      'TKT-2024-013': 'Rejected'
    };

    const currentStatus = statusMap[this.ticketId || ''] || 'Open';

    // Mock data for the demonstration
    this.ticket = {
      id: this.ticketId || 'TKT-2024-001',
      title: 'Equipment Inspection - Line A',
      description: 'Complete monthly safety inspection for production line A including hydraulic systems, electrical components, and safety mechanisms.',
      status: currentStatus,
      priority: 'High',
      createdBy: 'Rajesh Kumar',
      assignedTo: 'Arjun Sharma',
      team: 'Maintenance Team',
      startDate: '25/02/2026',
      endDate: '28/02/2026',
      category: 'Safety Inspection'
    };
  }

  onBack() {
    this.router.navigate(['/user/create-ticket']);
  }

  openCreateTicketDrawer() {
    this.isCreateDrawerOpen = true;
  }

  closeCreateTicketDrawer() {
    this.isCreateDrawerOpen = false;
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
    this.isRatingModalOpen = false;
  }

  openEscalateModal() {
    this.isEscalateModalOpen = true;
  }

  handleEscalateSubmit(data: any) {
    console.log('Ticket Escalated:', data, this.ticket);
    this.isEscalateModalOpen = false;
  }

  openRejectModal() {
    this.isRejectModalOpen = true;
  }

  handleRejectSubmit(data: any) {
    console.log('Ticket Rejected:', data, this.ticket);
    this.isRejectModalOpen = false;
  }

  openGenericModal(actionType: string) {
    this.genericActionType = actionType;
    this.genericModalTitle = `${actionType}: ${this.ticket?.title || ''} - ${this.ticket?.id || ''}`;
    this.genericReason = '';
    this.genericNote = '';
    this.isGenericModalOpen = true;
  }

  closeGenericModal() {
    this.isGenericModalOpen = false;
  }

  submitGenericAction() {
    console.log(`Ticket ${this.genericActionType}:`, { reason: this.genericReason, note: this.genericNote }, this.ticket);
    this.closeGenericModal();
  }
}
