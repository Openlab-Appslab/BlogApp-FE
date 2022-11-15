import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { user } from '../../user'
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers = new Headers();
  private userLoggedIn = new BehaviorSubject<{isLoggedIn: boolean}>({isLoggedIn: this.isLoggedIn()});
  userLoggedIn$ = this.userLoggedIn.asObservable();
  users : user[] = [];

  token: string;
 // private cookieValue: string;

  constructor(
    private readonly httpClient: HttpClient,
    public cookies: CookieService,
    private router: Router,
    private dialog : MatDialog
  ) { }

  emitUserLoggedIn() {
    this.userLoggedIn.next({isLoggedIn: this.isLoggedIn()});
  }

  getToken(): string {
    const authString = `${this.cookies.get('email')}:${this.cookies.get('password')}`
    return 'Basic ' + btoa(authString);
  }

  isLoggedIn(): boolean {
    return !!(this.cookies.get('email') && this.cookies.get('password'));
  }

  login(user: user){
    const authString = `${user.email}:${user.password}`;
    this.headers.set('Authorization', 'Basic ' + btoa(authString));

    fetch('http://localhost:8080/user', {
        method: 'GET',
        headers: this.headers,
      }).then((response) => {
        if (!response.ok) {
          this.showLoginFailedAlert();
        }
        this.cookies.set('email', user.email);
        this.cookies.set('password', user.password);
        this.emitUserLoggedIn();
        this.router.navigate(['/mainblog']);
      }).catch(error => {
        console.log('Error:', error);
        this.showLoginFailedAlert();
      });
  }

  private showLoginFailedAlert() {
    alert("Login failed, try again.")
  }

  showDialog(): void {
    this.dialog.open(DialogComponent);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.cookies.deleteAll('/');
    this.cookies.deleteAll('/ui/profile');
    this.emitUserLoggedIn();
    this.router.navigate(['/login']);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

}
