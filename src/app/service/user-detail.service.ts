import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '@auth0/auth0-angular';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(
    private http: HttpClient,
    private authS: AuthService,
    private readonly httpClient: HttpClient,
  ) { }


getUserDetail(){
  let authString = `${this.authS.cookies.get('email')}:${this.authS.cookies.get('password')}`

  let headerHttp = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Basic ' + btoa(authString)
  });

  return this.http.get<User[]>('http://localhost:8080/Auth/getUserDetail', {headers: headerHttp})
}
}



