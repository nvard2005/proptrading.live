import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, RouterModule, CommonModule] 
})
export class LoginComponent {
  constructor(private router: Router) {}

  email = '';
  password = '';
  showPassword: boolean = false;

  onLogin() {
    console.log('Logging in with', this.email, this.password);
  }

}
