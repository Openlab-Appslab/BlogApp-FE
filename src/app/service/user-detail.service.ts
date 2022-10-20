import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '@auth0/auth0-angular';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(
    private http: HttpClient,
    private authS: AuthService,
    private readonly httpClient: HttpClient,
  ) { }

  token: string;

  getToken(): string {
    return this.token;
  }

getUserDetail(){
  let authString = `${this.authS.cookies.get('email')}:${this.authS.cookies.get('password')}`

  let headerHttp = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Basic ' + btoa(authString)
  });

  console.log(this.http.get<User[]>('http://localhost:8080/user',{ headers: headerHttp }));


  return this.http.get<User[]>('http://localhost:8080/user', {headers: headerHttp})
}

editUser(user: User){
  let authString = `${this.authS.cookies.get('email')}:${this.authS.cookies.get('password')}`

  return fetch('http://localhost:8080/Auth/EditUser', { 
    method: 'POST', 
    headers: new Headers({ 
      'Authorization': 'Basic ' + btoa(authString), 
      'Content-Type': 'application/json' 
    }), 
    body: JSON.stringify({
      username : user.username,
      fullname: user.fullname,
      telephone : user.teephone,
      address: user.address,
      email: user.email
      }),  
  }) 
    .catch((error) => { 
      console.error('Error:', error); 
    }); 
}

  // editUser(username: string, )
}



