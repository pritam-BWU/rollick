import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SideDrawerComponent } from '../side-drawer/side-drawer.component';

@Component({
  selector: 'app-group-ticket-drawer',
  standalone: true,
  imports: [CommonModule, FormsModule, SideDrawerComponent],
  templateUrl: './group-ticket-drawer.component.html',
  styleUrl: './group-ticket-drawer.component.css'
})
export class GroupTicketDrawerComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  ticketData = {
    name: 'abc',
    description: '',
    type: 'Pass Information',
    priority: 'mid',
    startDate: '2026-04-28',
    endDate: '2026-04-30',
    assignToGroup: 'Production Line Team A (3 members)'
  };

  groupMembers = [
    { name: 'Rajesh Kumar', role: 'Team Leader' },
    { name: 'Priya Sharma', role: 'Production Manager' },
    { name: 'Arjun Patel', role: 'Quality Inspector' }
  ];

  onClose() {
    this.close.emit();
  }

  onCreateTicket() {
    console.log('Creating Ticket:', this.ticketData);
    this.onClose();
  }
}
