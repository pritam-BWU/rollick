import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-worker-ticket-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.css'
})
export class TicketDetailsComponent implements OnInit {
  ticket: any = null;
  ticketId: string | null = null;
  statusOptions = ['Not Started', 'In Progress', 'Completed'];
  isExtensionRequested = false;
  extensionRequest = {
    newStartDate: '',
    newEndDate: '',
    reason: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.ticketId = this.route.snapshot.paramMap.get('id');
    // Mock data
    this.ticket = {
      id: this.ticketId || 'TKT-2024-001',
      title: 'Equipment Inspection',
      description: 'Complete monthly safety inspection for production line A including hydraulic systems, electrical components, and safety mechanisms.',
      status: 'In Progress',
      priority: 'High',
      createdBy: 'Rajesh Kumar',
      assignedTo: 'Arjun Sharma',
      team: 'Maintenance Team',
      startDate: '25/02/2026',
      endDate: '28/02/2026',
      category: 'Maintenance'
    };
  }

  onBack() {
    this.router.navigate(['/worker/dashboard']);
  }

  onComplete() {
    if (this.ticket) {
      this.ticket.status = 'Completed';
    }
  }

  sendExtensionRequest() {
    console.log('Extension request sent:', this.extensionRequest);
    this.isExtensionRequested = true;
    // Mock success - in a real app this would call a service
    setTimeout(() => {
      this.isExtensionRequested = false;
      this.extensionRequest = { newStartDate: '', newEndDate: '', reason: '' };
    }, 3000);
  }
}
