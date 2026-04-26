import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountDrawerComponent } from './create-account-drawer.component';

describe('CreateAccountDrawerComponent', () => {
  let component: CreateAccountDrawerComponent;
  let fixture: ComponentFixture<CreateAccountDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAccountDrawerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
