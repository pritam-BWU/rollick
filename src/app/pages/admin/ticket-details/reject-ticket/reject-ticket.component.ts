import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-reject-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './reject-ticket.component.html',
  styleUrl: './reject-ticket.component.css'
})
export class RejectTicketComponent {
  @Input() isOpen: boolean = false;
  @Input() ticketName: string = '';
  @Input() ticketId: string = '';
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<{ reason: string, note: string }>();

  selectedReason: string = '';
  note: string = '';

  reasons: string[] = [
    'Incorrect Information',
    'Incomplete Request',
    'Duplicate Ticket',
    'Out of Scope',
    'Already Resolved',
    'Other'
  ];

  onClose() {
    this.close.emit();
    this.note = '';
    this.selectedReason = '';
  }

  onSubmit() {
    if (this.selectedReason && this.note.trim()) {
      this.submit.emit({ reason: this.selectedReason, note: this.note });
      this.onClose();
    }
  }
}
