import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleService } from '../../../services/page-title.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-ticket-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-dashboard.component.html',
  styleUrl: './ticket-dashboard.component.css',
})
export class TicketDashboardComponent implements OnInit, AfterViewInit {
  subtitle = 'Overview of all ticket activities and performance metrics';
  isDateRangeVisible = false;

  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit(): void {
    this.pageTitleService.setTitle('Ticket Dashboard');
    this.pageTitleService.setSubtitle(this.subtitle);
  }

  ngAfterViewInit(): void {
    this.initCharts();
  }

  toggleDateRange() {
    this.isDateRangeVisible = !this.isDateRangeVisible;
  }

  private initCharts() {
    this.createTotalTicketsChart();
    this.createCustomerFeedbackChart();
  }

  private createTotalTicketsChart() {
    const canvas = document.getElementById('totalTicketsChart') as HTMLCanvasElement;
    if (!canvas) return;

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Total Tickets',
          data: [120, 150, 180, 210, 170, 190, 230, 250, 210, 240, 280, 300],
          backgroundColor: '#3b82f6',
          borderRadius: 8,
          barThickness: 15
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1e293b',
            titleFont: { size: 14, weight: 'bold' },
            bodyFont: { size: 12 },
            padding: 12
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: '#f1f5f9' },
            ticks: { color: '#64748b' }
          },
          x: {
            grid: { display: false },
            ticks: { color: '#64748b' }
          }
        }
      }
    });
  }

  private createCustomerFeedbackChart() {
    const canvas = document.getElementById('customerFeedbackChart') as HTMLCanvasElement;
    if (!canvas) return;

    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Customer Feedback Score',
          data: [4.2, 4.5, 4.1, 4.8, 4.3, 4.6, 4.7, 4.4, 4.5, 4.9, 4.8, 4.7],
          backgroundColor: '#8b5cf6',
          borderRadius: 8,
          barThickness: 15
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1e293b',
            titleFont: { size: 14, weight: 'bold' },
            bodyFont: { size: 12 },
            padding: 12
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 5,
            grid: { color: '#f1f5f9' },
            ticks: { color: '#64748b' }
          },
          x: {
            grid: { display: false },
            ticks: { color: '#64748b' }
          }
        }
      }
    });
  }
}
