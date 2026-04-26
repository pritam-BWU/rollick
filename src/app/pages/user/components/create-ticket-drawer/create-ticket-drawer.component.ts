import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SideDrawerComponent } from '../../../../shared/components/side-drawer/side-drawer.component';

@Component({
  selector: 'app-user-create-ticket-drawer',
  standalone: true,
  imports: [CommonModule, FormsModule, SideDrawerComponent],
  templateUrl: './create-ticket-drawer.component.html',
  styleUrl: './create-ticket-drawer.component.css'
})
export class UserCreateTicketDrawerComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  ticketData = {
    name: '',
    description: '',
    category: '',
    type: 'issue'
  };

  selectedFile: File | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log('File selected:', file.name);
    }
  }

  onClose() {
    this.close.emit();
  }

  saveAsDraft() {
    console.log('User Save as Draft', { ...this.ticketData, file: this.selectedFile?.name });
    this.onClose();
  }

  submitTicket() {
    console.log('User Submit Ticket', { ...this.ticketData, file: this.selectedFile?.name });
    this.onClose();
  }
}
