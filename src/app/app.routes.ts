import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then(m => m.LoginComponent)
  },

  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [




      {
        path: 'accounts',
        loadComponent: () =>
          import('./pages/accounts/accounts.component')
            .then(m => m.AccountsComponent)
      },



      /* -- User Paths -- */
      {
        path: 'user/dashboard',
        loadComponent: () =>
          import('./pages/user/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'user/create-ticket',
        loadComponent: () =>
          import('./pages/user/create-ticket/create-ticket.component').then(m => m.CreateTicketComponent)
      },
      {
        path: 'user/ticket-history',
        loadComponent: () =>
          import('./pages/user/ticket-history/ticket-history.component').then(m => m.TicketHistoryComponent)
      },
      {
        path: 'user/my-tickets',
        loadComponent: () =>
          import('./pages/user/my-tickets/my-tickets.component').then(m => m.MyTicketsComponent)
      },
      {
        path: 'user/reports',
        loadComponent: () =>
          import('./pages/user/reports/reports.component').then(m => m.UserReportsComponent)
      },
      {
        path: 'user/ticket/:id',
        loadComponent: () =>
          import('./pages/user/ticket-details/ticket-details.component').then(m => (m as any).TicketDetailsComponent)
      },

      /* -- Worker Paths -- */
      {
        path: 'worker/dashboard',
        loadComponent: () =>
          import('./pages/worker/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'worker/my-tasks',
        loadComponent: () =>
          import('./pages/worker/my-tasks/my-tasks.component').then(m => m.MyTasksComponent)
      },
      {
        path: 'worker/tickets',
        loadComponent: () =>
          import('./pages/worker/tickets/tickets.component').then(m => m.TicketsComponent)
      },
      {
        path: 'worker/reports',
        loadComponent: () =>
          import('./pages/worker/reports/reports.component').then(m => m.WorkerReportsComponent)
      },
      {
        path: 'worker/ticket/:id',
        loadComponent: () =>
          import('./pages/worker/ticket-details/ticket-details.component').then(m => (m as any).TicketDetailsComponent)
      },

      /* -- Admin Paths -- */
      {
        path: 'admin/dashboard',
        loadComponent: () =>
          import('./pages/admin/ticket-dashboard/ticket-dashboard.component').then(m => m.TicketDashboardComponent)
      },
      {
        path: 'admin/ticket-list',
        loadComponent: () =>
          import('./pages/admin/ticket-list/ticket-list.component').then(m => m.TicketListComponent)
      },
      {
        path: 'admin/reports',
        loadComponent: () =>
          import('./pages/admin/reports/reports.component').then(m => m.AdminReportsComponent)
      },
      {
        path: 'admin/escalation',
        loadComponent: () =>
          import('./pages/admin/task-escalation/task-escalation.component').then(m => m.TaskEscalationComponent)
      },
      {
        path: 'admin/ticket/:id',
        loadComponent: () =>
          import('./pages/admin/ticket-details/ticket-details.component').then(m => (m as any).TicketDetailsComponent)
      },
      {
        path: '**',
        redirectTo: 'user/dashboard'
      }

    ]
  }


];