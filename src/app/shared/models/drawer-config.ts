export interface FieldConfig {
  key: string;
  label: string;
  type: 'text' | 'select' | 'toggle' | 'email' | 'number';
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
}

export interface SectionConfig {
  id: string;
  title: string;
  fields: FieldConfig[];
}

export interface DrawerConfig {
  title: string;
  sections: SectionConfig[];
}

// Add these to your existing drawer-config.model.ts

export interface PanelItem {
  id: string;
  name: string;
  subText?: string;        // e.g. "ID #353543"
  tag?: string;            // e.g. "Warranty", "Under Service"
  tagClass?: string;       // e.g. "warranty", "service", "expired"
  statusClass?: string;    // e.g. "green", "orange", "red"
  date?: string;
  extraFields?: { label: string; value: string }[];  // for flexible extra rows
}

export interface RightPanelConfig {
  title: string;                          // e.g. "Product With Account"
  searchPlaceholder?: string;             // e.g. "Search activity log..."
  addButtonLabel?: string;                // e.g. "+ Add Product"
  items: PanelItem[];
}


export interface ToolbarButton {
  label: string;
  class: 'primary' | 'outline';
  action: string;        // 👈 string identifier, not a function
}

export interface ToolbarConfig {
  showSearch: boolean;
  showFilter: boolean;
  showUpload: boolean;
  showDownload: boolean;
  showColumnSort: boolean;
  buttons: ToolbarButton[];
}
