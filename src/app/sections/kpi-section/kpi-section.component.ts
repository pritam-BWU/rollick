// import { Component } from '@angular/core';
// import { NgFor, NgIf } from '@angular/common';

// @Component({
//   selector: 'app-kpi-section',
//   standalone: true,
//   imports: [NgFor, NgIf],
//   templateUrl: './kpi-section.component.html',
//   styleUrls: ['./kpi-section.component.css']
// })
// export class KpiSectionComponent {



// kpis: KPI[] = [
//   {
//     title: 'Total Accounts',
//     value: 1250,
//     change: 12,
//     trend: 'up',
//     color: '#4CAF50'
//   },
//   {
//     title: 'Inactive Accounts',
//     value: 85,
//     change: -5,
//     trend: 'down',
//     color: '#FF9800'
//   },
//   {
//     title: 'Blacklisted Accounts',
//     value: 12,
//     change: 2,
//     trend: 'up',
//     color: '#F44336'
//   },
//   {
//     title: 'AMC Expiring Soon',
//     value: 34,
//     change: 6,
//     trend: 'up',
//     color: '#2196F3'
//   },
//   {
//     title: 'Warranty Expiring Soon',
//     value: 18,
//     change: -3,
//     trend: 'down',
//     color: '#9C27B0'
//   },

//   {
//     title: 'AMC Expired',
//     value: 18,
//     change: -3,
//     trend: 'down',
//     color: '#9C27B0'
//   },

//   {
//     title: 'Warranty Expired',
//     value: 18,
//     change: -3,
//     trend: 'down',
//     color: '#9C27B0'
//   }

// ];

//   visibleCount = 4;
//   startIndex = 0;

//   get visibleKpis() {
//     return this.kpis.slice(this.startIndex, this.startIndex + this.visibleCount);
//   }

//   next() {
//     if (this.startIndex + this.visibleCount < this.kpis.length) {
//       this.startIndex++;
//     }
//   }

//   prev() {
//     if (this.startIndex > 0) {
//       this.startIndex--;
//     }
//   }

// }


// interface KPI {
//   title: string;
//   value: number;
//   change: number;
//   trend: 'up' | 'down';
//   color: string;
// }


// ==========================================================================================


import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

export interface KPI {
  title: string;
  value: number;
  change: number;
  trend: 'up' | 'down';
  color: string;
  icon: string;
}

@Component({
  selector: 'app-kpi-section',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './kpi-section.component.html',
  styleUrls: ['./kpi-section.component.css']
})
export class KpiSectionComponent {

  @Input() kpis: KPI[] = [];
  @Output() kpiSelected = new EventEmitter<string>();


  selectedKpi: string | null = null;
  visibleCount = 5;   // show 5 cards, carousel triggers when kpis.length > 5
  startIndex = 0;

  selectKpi(kpi: KPI): void {
    // clicking same KPI again → deselect (show all)
    if (this.selectedKpi === kpi.title) {
      this.selectedKpi = null;
      this.kpiSelected.emit('');     // empty = show all
    } else {
      this.selectedKpi = kpi.title;
      this.kpiSelected.emit(kpi.title);
    }
  }

  get visibleKpis(): KPI[] {
    return this.kpis.slice(this.startIndex, this.startIndex + this.visibleCount);
  }

  next(): void {
    if (this.startIndex + this.visibleCount < this.kpis.length) {
      this.startIndex++;
    }
  }

  prev(): void {
    if (this.startIndex > 0) {
      this.startIndex--;
    }
  }
}