import { Component } from '@angular/core';

// Layout components — same level as main-layout
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

// Sections — go up two levels (main-layout → layout → app) then into sections
// import { KpiSectionComponent } from '../../sections/kpi-section/kpi-section.component';
// import { TableControlComponent } from '../../sections/table-control/table-control.component';
// import { TableGridComponent } from '../../sections/table-grid/table-grid.component';

// If it is not imported then we can't use <router-outlet> in app.component.html
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    // KpiSectionComponent,
    // TableControlComponent,
    // TableGridComponent,
    RouterOutlet
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  constructor(private themeService: ThemeService) { }
  isSidebarCollapsed = false;

  onSidebarToggle(value: boolean) {
    this.isSidebarCollapsed = value;
  }
}
