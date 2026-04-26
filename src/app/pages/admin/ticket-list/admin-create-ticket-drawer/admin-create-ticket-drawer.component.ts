import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SideDrawerComponent } from '../../../../shared/components/side-drawer/side-drawer.component';

@Component({
  selector: 'app-admin-create-ticket-drawer',
  standalone: true,
  imports: [CommonModule, FormsModule, SideDrawerComponent],
  templateUrl: './admin-create-ticket-drawer.component.html',
  styleUrl: './admin-create-ticket-drawer.component.css'
})
export class AdminCreateTicketDrawerComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  ticketData = {
    name: '',
    description: '',
    category: '',
    department: '',
    assignType: 'individual',
    assignedTo: '',
    startDate: '',
    endDate: '',
    priority: 'mid',
    status: 'assigned',
    notes: ''
  };

  onClose() {
    this.close.emit();
  }

  saveAsDraft() {
    console.log('Admin - Save as Draft', this.ticketData);
    this.onClose();
  }

  createTicket() {
    console.log('Admin - Create Ticket', this.ticketData);
    this.onClose();
  }
}
