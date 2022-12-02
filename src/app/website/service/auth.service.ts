import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { user } from '../../user'
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { User } from '../_models';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers = new Headers();
  private userLoggedIn = new BehaviorSubject<{isLoggedIn: boolean}>({isLoggedIn: this.isLoggedIn()});
  userLoggedIn$ = this.userLoggedIn.asObservable();
  users : user[] = [];

  token: string;
  user: User;
 // private cookieValue: string;

 ngOnInit(): void {
  localStorage.clear();
}

  constructor(
    private readonly httpClient: HttpClient,
    public cookies: CookieService,
    private router: Router,
    private dialog : MatDialog,
  ) { }

  emitUserLoggedIn() {
    this.userLoggedIn.next({isLoggedIn: this.isLoggedIn()});
  }

  getToken(): string {
    const authString = `${this.cookies.get('email')}:${this.cookies.get('password')}`
    return 'Basic ' + btoa(authString);
  }

  isLoggedIn(): boolean {
    return /*localStorage.getItem('token') != null*/ !!(this.cookies.get('email') && this.cookies.get('password'));
  }

  login(user: user){
    const authString = `${user.email}:${user.password}`;
    this.headers.set('Authorization', 'Basic ' + btoa(authString));

    fetch('http://localhost:8080/user', {
        method: 'GET',
        headers: this.headers
      })
      .then(response => response.json())
      .then(userData => {
        this.cookies.set('email', userData.email);
        this.cookies.set('password', userData.password);
        this.cookies.set('admin', userData.admin);
        this.emitUserLoggedIn();
        this.router.navigate(['/mainblog']);
      })
      .catch(error => {
        console.log('Error:', error);
        alert("Login failed, try again.")
      });
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
