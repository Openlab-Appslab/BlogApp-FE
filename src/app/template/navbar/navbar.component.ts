import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  name = 'Angular';

  navbarOpen = false;
  isLoggedIn: boolean;

  constructor(
    public authService: AuthService
    ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onlogout() {
    this.authService.logoutUser();
  }
}
