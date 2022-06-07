import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { user } from '../../user';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private readonly loginService: AuthService,
    private cookies: CookieService,
  ) { }

  users: user[] = [];
  loggedInEmail: string;

  ngOnInit(): void {
    this.loggedInEmail = this.cookies.get('username');

    this.loginService.userSubject.asObservable().subscribe(() => {
      this.loggedInEmail = this.cookies.get('username');
    })
  }

  model = new user( "", "", "");

  onlogout() { 
    this.loginService.logoutUser();
    location.reload();
  }

}
