import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountDrawerComponent } from '../../shared/components/create-account-drawer/create-account-drawer.component';
import { DrawerConfig } from '../../shared/models/drawer-config';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-quick-links',
  standalone: true,
  imports: [CommonModule, CreateAccountDrawerComponent],
  templateUrl: './quick-links.component.html',
  styleUrl: './quick-links.component.css'
})
export class QuickLinksComponent {

  constructor(private pageTitleService: PageTitleService) { }

  ngOnInit(): void {
    this.pageTitleService.title$.subscribe(title => {
      this.pageTitle = title;
    });
    this.pageTitleService.subtitle$.subscribe(subtitle => {
      this.pageSubtitle = subtitle;
    });
  }

  isExpanded: boolean = false;   // default collapsed
  showAccountPopup: boolean = false;
  showContactPopup: boolean = false;
  openSection: string | null = null;
  pageTitle = '';
  pageSubtitle = '';


  toggle() {
    this.isExpanded = !this.isExpanded;
  }


  createAccount() {
    this.showAccountPopup = true;
  }

  createContact() {
    this.showContactPopup = true;
  }

  showDrawer = false;

  accountDrawerConfig: DrawerConfig = {
    title: 'Create Account',
    sections: [
      {
        id: 'basic', title: 'Basic Information',
        fields: [
          { key: 'accountName', label: 'Account Name', type: 'text', placeholder: 'Enter account name', required: true },
          {
            key: 'accountType', label: 'Account Type', type: 'select', placeholder: 'select type', required: true,
            options: [{ label: 'Customer', value: 'customer' }, { label: 'Partner', value: 'partner' }]
          },
          {
            key: 'industry', label: 'Industry', type: 'select',
            options: [{ label: 'IT', value: 'it' }, { label: 'Finance', value: 'finance' }]
          }
        ]
      },
      {
        id: 'other', title: 'Other Information',
        fields: [
          { key: 'gstin', label: 'GSTIN No', type: 'text', placeholder: 'Enter GSTIN', required: true },
          { key: 'pan', label: 'PAN No', type: 'text', placeholder: 'Enter PAN', required: true },
          { key: 'website', label: 'Website', type: 'text', placeholder: 'Enter website' },
          { key: 'status', label: 'Status', type: 'toggle' }
        ]
      },
      {
        id: 'payment', title: 'Payment Information',
        fields: [
          { key: 'creditLimit', label: 'Credit Limit', type: 'number', placeholder: 'Enter limit', required: true },
          { key: 'paymentTerms', label: 'Payment Terms', type: 'text', placeholder: 'Enter terms', required: true }
        ]
      }
    ]
  };


  contactDrawerConfig: DrawerConfig = {
    title: 'Create Contact',
    sections: [
      {
        id: 'personal', title: 'Personal Information',
        fields: [
          { key: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter first name', required: true },
          { key: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Enter last name', required: true },
          { key: 'email', label: 'Email', type: 'email', placeholder: 'Enter email', required: true }
        ]
      },
      {
        id: 'work', title: 'Work Information',
        fields: [
          { key: 'company', label: 'Company', type: 'text', placeholder: 'Enter company' },
          { key: 'designation', label: 'Designation', type: 'text', placeholder: 'Enter designation' }
        ]
      }
    ]
  };

  onSaved(data: any): void {
    console.log('Form data:', data);
  }

  // toggleSection(section: string): void {
  //   this.openSection = this.openSection === section ? null : section;
  // }

}
