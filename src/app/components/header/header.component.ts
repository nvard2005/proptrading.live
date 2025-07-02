import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; // ✅ Correct imports

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  

  navigateToSignup() {
    this.router.navigate(['/signup']);}
    
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
