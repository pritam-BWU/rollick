import { Component } from '@angular/core';

// import { SidebarComponent } from './layout/sidebar/sidebar.component';
// import { HeaderComponent } from './layout/header/header.component';
// import { FooterComponent } from './layout/footer/footer.component';

// import { KpiSectionComponent } from './sections/kpi-section/kpi-section.component';
// import { TableControlComponent } from './sections/table-control/table-control.component';
// import { TableGridComponent } from './sections/table-grid/table-grid.component';
// import { QuickLinksComponent } from './sections/quick-links/quick-links.component';

// If it is not imported then we can't use <router-outlet> in app.component.html
import { RouterOutlet } from '@angular/router';
// import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    // SidebarComponent,
    // HeaderComponent,
    // FooterComponent,
    // KpiSectionComponent,
    // TableControlComponent,
    // TableGridComponent,
    RouterOutlet,
    // QuickLinksComponent
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // constructor(private themeService:ThemeService){}

  // ngOnInit(){
  //   this.themeService.loadTheme()
  // }
}