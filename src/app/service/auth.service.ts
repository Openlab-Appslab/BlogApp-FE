import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { user } from '../user'
import { Subject } from 'rxjs';
import { DialogComponent } from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers = new Headers();
  authString: string;
  userSubject = new Subject<void>();
  users : user[] = [];

  token: string;
 // private cookieValue: string;

  constructor(
    private readonly httpClient: HttpClient,
    private cookies: CookieService,
    private _router: Router,
    private dialog : MatDialog, 
  ) { }

  getToken(): string {
    const authString = `${this.cookies.get('email')}:${this.cookies.get('password')}`
    return 'Basic ' + btoa(authString);
  }

  isLoggedIn(): boolean {
    return !!(this.cookies.get('email') && this.cookies.get('password'));  
  }

  async login(user: user){

    let authString = `${user.email}:${user.password}`

    this.headers.set('Authorization', 'Basic ' + btoa(authString))

    try {
      const response = await fetch('http://localhost:8080/user', {
        method: 'GET',
        headers: this.headers,
      });
      const data_1 = await response.json();
      this.cookies.set('email', user.email);
      this.cookies.set('password', user.password );
      window.location.href="/mainblog" 

    }
     catch (error) {
      console.log('Error:', error);
      //alert("Login failed, try again.")
      this.showDialog();
    }
  }

  showDialog(): void {
    this.dialog.open(DialogComponent);
  }

  logoutUser() {
    localStorage.removeItem('token')
    this.cookies.delete ('email');
    this.cookies.delete('password');
    this._router.navigate(['/mainblog'])
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

}
