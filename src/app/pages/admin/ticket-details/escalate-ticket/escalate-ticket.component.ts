import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-escalate-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './escalate-ticket.component.html',
  styleUrl: './escalate-ticket.component.css'
})
export class EscalateTicketComponent {
  @Input() isOpen: boolean = false;
  @Input() ticketName: string = '';
  @Input() ticketId: string = '';
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<{ person: string, comment: string }>();

  selectedPerson: string = '';
  comment: string = '';

  onClose() {
    this.close.emit();
    this.comment = '';
    this.selectedPerson = '';
  }

  onSubmit() {
    if (this.comment.trim()) {
      this.submit.emit({ person: this.selectedPerson, comment: this.comment });
      this.onClose();
    }
  }
}
