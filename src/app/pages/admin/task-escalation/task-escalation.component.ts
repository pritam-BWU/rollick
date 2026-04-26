import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-escalation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-escalation.component.html',
  styleUrl: './task-escalation.component.css'
})
export class TaskEscalationComponent {
  tickets: any[] = [
    {
      id: 'TKT-2024-001', 
      name: 'Equipment Inspection - Line A', 
      description: 'Complete monthly safety inspection', 
      createdBy: 'Rajesh Kumar', 
      createdDate: '20/02/2026', 
      startDate: '25/02/2026', 
      endDate: '27/02/2026', 
      dueStatus: 'Escalated', 
      days: 26, 
      status: 'Assigned', 
      priority: 'High', 
      assignedTo: 'Arjun Sharma', 
      department: 'SMS', 
      category: 'Safety Inspection'
    },
    {
      id: 'TKT-2024-002', 
      name: 'Maintenance Report Review', 
      description: 'Review and approve maintenance', 
      createdBy: 'Priya Patel', 
      createdDate: '22/02/2026', 
      startDate: '26/02/2026', 
      endDate: '10/02/2026', 
      dueStatus: 'Escalated', 
      days: 43, 
      status: 'Assigned', 
      priority: 'Mid', 
      assignedTo: 'Maintenance Team', 
      department: 'RM', 
      category: 'Maintenance'
    }
  ];

  onAction(action: string, ticket: any) {
    console.log(`Action: ${action}`, ticket);
  }
}
