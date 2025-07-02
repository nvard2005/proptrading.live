import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  onSignup() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // Send signup data to backend (connect with API here)
    console.log({
      name: this.name,
      email: this.email,
      password: this.password,
    });

    // Reset form or navigate on success
  }
}
