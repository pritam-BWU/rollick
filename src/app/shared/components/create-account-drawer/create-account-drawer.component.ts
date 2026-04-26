import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DrawerConfig } from '../../models/drawer-config';

@Component({
  selector: 'app-create-account-drawer',
  standalone: true,
  imports: [CommonModule, FormsModule],  // 👈 *ngFor, *ngIf, [(ngModel)]
  templateUrl: './create-account-drawer.component.html',
  styleUrl: './create-account-drawer.component.css'
})
export class CreateAccountDrawerComponent {

  @Input() show: boolean = false;
  @Input() config!: DrawerConfig;
  @Output() closed = new EventEmitter<void>();
  @Output() saved = new EventEmitter<any>();

  showAccountPopup : boolean = false;
  openSection: string | null = null;
  formData: Record<string, any> = {};

  toggleSection(id: string): void {
    this.openSection = this.openSection === id ? null : id;
  }

  closePopup(): void {
    this.openSection = null;
    this.closed.emit();
  }

  onSave(): void {
    this.saved.emit(this.formData);
  }


}
