import { Component , Input , Output , EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightPanelConfig } from '../../models/drawer-config';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-right-side-panel',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './right-side-panel.component.html',
  styleUrl: './right-side-panel.component.css'
})
export class RightSidePanelComponent {
  @Input() products: any[] = [];
  @Input() config!: RightPanelConfig;
  @Output() addButtonClicked = new EventEmitter<string>();
  // @Input() config?: RightPanelConfig;


  searchTerm: string = '';

  get filteredItems() {
    if (!this.searchTerm) return this.config?.items || [];
    return this.config.items.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onAddButtonClick(): void {
    this.addButtonClicked.emit(this.config.addButtonLabel); // emits "Add Product" / "Add Account" etc.
  }



}
