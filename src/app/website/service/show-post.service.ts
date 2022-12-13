import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from '../../blog.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { helpers } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ShowPostService {

  constructor(
    private http: HttpClient,
    private authS: AuthService,
    private readonly httpClient: HttpClient,
  ) { }

  getAllBlog(blogsName: string): Observable<Blog[]>{
    // let authString = `${this.authS.cookies.get('email')}:${this.authS.cookies.get('password')}`

    // let headerHttp = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   Authorization: 'Basic ' + btoa(authString)
    // });

    // console.log(this.http.get<Blog[]>('http://localhost:8080/getAllBlogs',{ headers: headerHttp }));

		// return this.httpClient.get<Blog[]>('http://localhost:8080/noAuth/getAllBlogs', {headers: headerHttp});
		return this.httpClient.get<Blog[]>('http://localhost:8080/noAuth/getAllBlogs');
	}


  getUserBlog(){
    let authString = `${this.authS.cookies.get('email')}:${this.authS.cookies.get('password')}`

    let headerHttp = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(authString)
    });

    console.log(this.http.get<Blog[]>('http://localhost:8080/Auth/userBlogs',{ headers: headerHttp }));

    return this.http.get<Blog[]>('http://localhost:8080/Auth/userBlogs', {headers: headerHttp})
  }

  // getBlog() {

  //   let authString = `${this.authS.cookies.get('email')}:${this.authS.cookies.get('password')}`

  //   let headerHttp = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: 'Basic ' + btoa(authString)
  //   });
    
  //   return this.http.get<Blog>('http://localhost:8080/blog/', {headers: headerHttp});
  // }

  getBlogDetail(blogTitle: string): Observable<Blog> {

    let authString = `${this.authS.cookies.get('email')}:${this.authS.cookies.get('password')}`

    let headerHttp = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa(authString)
        });

        console.log(this.http.get<Blog[]>('http://localhost:8080/noAuth/blog/',{ headers: headerHttp }));

    return this.httpClient.get<Blog>('http://localhost:8080/noAuth/blog/'+ blogTitle, {headers: headerHttp});
}

getProfileDetail(){
    
    let authString = `${this.authS.cookies.get('email')}:${this.authS.cookies.get('password')}`

    let headerHttp = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa(authString)
        });

        console.log(this.http.get<Blog[]>('http://localhost:8080/profile/',{ headers: headerHttp }));

    return this.httpClient.get<Blog>('http://localhost:8080/profile/'+ {headers: headerHttp});
  }

}

