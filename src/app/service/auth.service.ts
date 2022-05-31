import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
 // private cookieValue: string;

  constructor(
    private readonly httpClient: HttpClient,
   // private cookieService: CookieService
   private _router: Router
  ) { }

  getToken(): string {
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

  login(email: string, password: string): Observable<any> {
    const info = btoa(`${email}:${password}`);
    const token = `Basic ${info}`;
    const options = {
      headers: new HttpHeaders({
        Authorization: token,
        'X-Requested-With' : 'XMLHttpRequest'
      }),
      withCredentials: true
    };
    return this.httpClient.get('http://localhost:8080/user', options).pipe(
      tap(() => this.token = token)
    );
  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/main-blog'])
  }

  logout(): void {
    this.token = null;
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }

  //ngOnInit(): void {
   // this.cookieService.set('cookie-name', 'our cookie value');
   // this.cookieValue = this.cookieService.get('cookie-name');
   //}

}
