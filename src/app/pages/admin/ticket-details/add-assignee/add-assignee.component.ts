import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-add-assignee',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './add-assignee.component.html',
  styleUrl: './add-assignee.component.css'
})
export class AddAssigneeComponent {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() assign = new EventEmitter<string>();

  searchTerm: string = '';
  employees = [
    { name: 'Kavya Reddy', department: 'Quality' },
    { name: 'Rajesh Kumar', department: 'Leadership' },
    { name: 'Priya Patel', department: 'Production' },
    { name: 'Vikram Singh', department: 'Safety' }
  ];

  get filteredEmployees() {
    return this.employees.filter(emp => 
      emp.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onClose() {
    this.close.emit();
  }

  onAssign(name: string) {
    this.assign.emit(name);
    this.onClose();
  }
}
