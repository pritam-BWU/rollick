import { Component , Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarConfig } from '../../models/drawer-config';

@Component({
  selector: 'app-table-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-toolbar.component.html',
  styleUrl: './table-toolbar.component.css'
})
export class TableToolbarComponent {
  @Input() config!: ToolbarConfig;
  @Output() buttonClicked = new EventEmitter<string>();
  @Output() searched = new EventEmitter<string>();

  onButtonClick(action: string): void {
    this.buttonClicked.emit(action);
  }
}
