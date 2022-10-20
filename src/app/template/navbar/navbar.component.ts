import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { user } from '../../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  name = 'Angular';

  loggedInEmail: string;

  constructor(
    public _authService: AuthService,
    private cookies: CookieService,
    ) { }

  ngOnInit(): void {
    this.loggedInEmail = this.cookies.get('email');

    this._authService.userSubject.asObservable().subscribe(() => {
      this.loggedInEmail = this.cookies.get('email');
    })
  }

  model = new user( "", "", "", "", "", "");
    

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onlogout() { 
    this._authService.logoutUser();
    location.reload();
  }

}
  