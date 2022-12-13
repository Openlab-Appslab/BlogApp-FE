import { Component } from '@angular/core';
import { AuthService } from 'src/app/website/service/auth.service';
import { Observable } from 'rxjs';
import { user } from '../../../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  name = 'Angular';
  
  public user: user;

  navbarOpen = false;

  userLoggedIn$: Observable<{isLoggedIn: boolean}>;

  adminLoggedIn$: Observable<{isAdmin: boolean}>;

  constructor(
    public authService: AuthService
    ) { }

  ngOnInit(): void {
    this.userLoggedIn$ = this.authService.userLoggedIn$;

    this.adminLoggedIn$= this.authService.adminLoggedIn$;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onlogout() {
    this.authService.logoutUser();
  }
}
