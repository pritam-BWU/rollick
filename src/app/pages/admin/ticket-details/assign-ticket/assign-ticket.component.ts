import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-assign-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './assign-ticket.component.html',
  styleUrl: './assign-ticket.component.css'
})
export class AssignTicketComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() assign = new EventEmitter<string>();

  selectedEmployee: string = '';
  employees = [
    'Arjun Sharma',
    'Kavya Reddy',
    'Rajesh Kumar',
    'Priya Patel',
    'Vikram Singh'
  ];

  onClose() {
    this.close.emit();
  }

  onAssign() {
    if (this.selectedEmployee) {
      this.assign.emit(this.selectedEmployee);
      this.onClose();
    }
  }
}
