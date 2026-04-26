import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddAssigneeComponent } from './add-assignee/add-assignee.component';
import { AssignTicketComponent } from './assign-ticket/assign-ticket.component';

@Component({
  selector: 'app-ticket-view',
  standalone: true,
  imports: [CommonModule, FormsModule, AddAssigneeComponent, AssignTicketComponent],
  templateUrl: './ticket-view.component.html',
  styleUrl: './ticket-view.component.css'
})
export class TicketViewComponent {
  @Input() ticket: any;
  @Output() back = new EventEmitter<void>();

  isAssigneeModalOpen: boolean = false;
  isAssignModalOpen: boolean = false;

  onBack() {
    this.back.emit();
  }

  openAssigneeModal() {
    this.isAssigneeModalOpen = true;
  }

  onAssigneeAdded(name: string) {
    console.log('New assignee added:', name);
    // Add logic to handle new assignee
    this.isAssigneeModalOpen = false;
  }

  openAssignModal() {
    this.isAssignModalOpen = true;
  }

  onTicketAssigned(name: string) {
    console.log('Ticket reassigned to:', name);
    // Add logic to handle reassignment
    this.isAssignModalOpen = false;
  }
}
