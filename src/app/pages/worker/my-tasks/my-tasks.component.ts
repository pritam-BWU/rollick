import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleService } from '../../../services/page-title.service';
import { CreateTicketDrawerComponent } from '../../../shared/components/create-ticket-drawer/create-ticket-drawer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-tasks',
  standalone: true,
  imports: [CommonModule, RouterModule, CreateTicketDrawerComponent, FormsModule],
  templateUrl: './my-tasks.component.html',
  styleUrl: './my-tasks.component.css'
})
export class MyTasksComponent implements OnInit {

  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit(): void {
    this.pageTitleService.setTitle('My Tasks');
    this.pageTitleService.setSubtitle('Manage and track your assigned work items');
  }

  activeTab: string = 'my';
  isCreateDrawerOpen: boolean = false;
  isFilterDropdownOpen = false;

  selectedFilters = {
    date: false,
    id: false
  };

  openCreateTicketDrawer() {
    this.isCreateDrawerOpen = true;
  }

  closeCreateTicketDrawer() {
    this.isCreateDrawerOpen = false;
  }

  toggleFilterDropdown() {
    this.isFilterDropdownOpen = !this.isFilterDropdownOpen;
  }

  applyFilters() {
    console.log('Applying filters:', this.selectedFilters);
    this.isFilterDropdownOpen = false;
  }
}
