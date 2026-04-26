import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


const VALID_CREDENTIALS = [
  { userId: 'admin', password: 'admin123' },
  { userId: 'Rollick', password: 'Rollick@2026' },
];


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userId = '';
  password = '';
  showPassword = false;
  isLoading = false;
  errorMessage = '';
  showForgotPassword = false;
  forgotEmail = '';

  constructor(private router: Router) { }

  login(): void {
    this.errorMessage = '';

    // Basic validation
    if (!this.userId.trim() || !this.password.trim()) {
      this.errorMessage = 'Please enter both User ID and Password.';
      return;
    }

    this.isLoading = true;

    // Simulate API delay
    setTimeout(() => {
      const match = VALID_CREDENTIALS.find(
        c => c.userId === this.userId && c.password === this.password
      );

      if (match) {
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userId', this.userId);

        // Redirect to create ticket page
        this.router.navigate(['/user/create-ticket']);
      } else {
        this.errorMessage = 'Invalid User ID or Password. Please try again.';
      }

      this.isLoading = false;
    }, 800);
  }

  sendResetLink(): void {
    if (!this.forgotEmail.trim()) {
      this.errorMessage = 'Please enter your email address.';
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      alert('Reset link sent to your email!');
      this.showForgotPassword = false;
    }, 1500);
  }
}
