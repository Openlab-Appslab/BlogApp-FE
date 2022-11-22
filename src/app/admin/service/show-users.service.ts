import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../../user';
import { Observable } from 'rxjs';
import { AuthService } from '../../website/service/auth.service';
import { helpers } from 'chart.js';

@Injectable({
  providedIn: 'root',
})
export class ShowUsersService {
  constructor(
    private http: HttpClient,
    private authS: AuthService,
    private readonly httpClient: HttpClient,
  ) {}

  getAllUsers(): Observable<user[]> {
    let authString = `${this.authS.cookies.get(
      'email'
    )}:${this.authS.cookies.get('password')}`;

    let headerHttp = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(authString),
    });

    return this.http.get<user[]>('http://localhost:8080/Auth/GetAllUser', {headers: headerHttp});
  }
  
  getAllAdmins(): Observable<user[]> {
    let authString = `${this.authS.cookies.get(
      'email'
    )}:${this.authS.cookies.get('password')}`;

    let headerHttp = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(authString),
    });

    return this.http.get<user[]>('http://localhost:8080/Auth/GetAllAdmin', {headers: headerHttp});
  }
}
