import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SideDrawerComponent } from '../side-drawer/side-drawer.component';

@Component({
  selector: 'app-create-ticket-drawer',
  standalone: true,
  imports: [CommonModule, FormsModule, SideDrawerComponent],
  templateUrl: './create-ticket-drawer.component.html',
  styleUrl: './create-ticket-drawer.component.css'
})
export class CreateTicketDrawerComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  ticketData = {
    name: '',
    description: '',
    category: '',
    assignDate: '',
    endDate: '',
    department: '',
    assignType: 'individual',
    employee: '',
    priority: 'mid'
  };

  onClose() {
    this.close.emit();
  }

  saveAsDraft() {
    console.log('Save as Draft', this.ticketData);
    this.onClose();
  }

  assignNow() {
    console.log('Assign Now', this.ticketData);
    this.onClose();
  }
}
