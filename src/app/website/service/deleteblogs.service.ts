import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteblogsService {

  constructor(
    private http: HttpClient,
    private authS: AuthService,
  ) { }


  deleteBlogs(blogId: number): Observable<void>{
    let authString = `${this.authS.cookies.get('email')}:${this.authS.cookies.get('password')}`

    let headerHttp = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(authString)
    });

    return this.http.delete<void>(`http://localhost:8080/NoAuth/deleteBlog/${blogId}`, { headers: headerHttp });
  }
}
