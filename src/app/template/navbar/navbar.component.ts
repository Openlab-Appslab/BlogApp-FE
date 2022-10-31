import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  name = 'Angular';

  navbarOpen = false;
  userLoggedIn$: Observable<{isLoggedIn: boolean}>;

  constructor(
    public authService: AuthService
    ) { }

  ngOnInit(): void {
    this.userLoggedIn$ = this.authService.userLoggedIn$;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onlogout() {
    this.authService.logoutUser();
  }
}
