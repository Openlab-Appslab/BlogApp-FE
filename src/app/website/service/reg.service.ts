import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegService {

  token: string;

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  getToken(): string {
    return this.token;
  }

  isRegisteredIn(): boolean {
    return !!this.token;
  }

  register(username: string, email: string, password: string): Observable<any> {
    const info = btoa(`${username}:${email}:${password}`);
    const token = `Basic ${info}`;
    const options = {
      headers: new HttpHeaders({
        Authorization: token,
        'X-Requested-With' : 'XMLHttpRequest'
      }),
      withCredentials: true
    };
    return this.httpClient.get('http://localhost:8080/noAuth/register', options).pipe(
      tap(() => this.token = token)
    );
  }

  logout(): void {
    this.token = null;
  }

  ngOnInit(): void {
   }

}
