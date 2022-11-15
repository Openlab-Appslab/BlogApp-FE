import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '@auth0/auth0-angular';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(
    private http: HttpClient,
    private authS: AuthService,
    private readonly httpClient: HttpClient,
    private modal: MatDialog
  ) { }

  token: string;

  getToken(): string {
    return this.token;
  }

getUserDetail(): Observable<User> {
  let authString = `${this.authS.cookies.get('email')}:${this.authS.cookies.get('password')}`

  let headerHttp = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Basic ' + btoa(authString)
  });

  console.log(this.http.get<User>('http://localhost:8080/user',{ headers: headerHttp }));


  return this.http.get<User>('http://localhost:8080/user', {headers: headerHttp})
}

editUser(fullname: string, username: string, address: string, telephone: string){
  let authString = `${this.authS.cookies.get('email')}:${this.authS.cookies.get('password')}`
   
  // console.log(JSON.stringify({
  //   fullname,
  //   username,
  //   address,
  //   telephone
  // }))

  return fetch('http://localhost:8080/Auth/EditUser', { 
    method: 'POST', 
    headers: new Headers({ 
      'Authorization': 'Basic ' + btoa(authString), 
      'Content-Type': 'application/json' 
    }), 
    body: JSON.stringify({
      fullname,
      username,
      address,
      telephone

      }),  
  }) 
    .catch((error) => { 
      console.log('Error:', error); 
    }); 

  }
}



