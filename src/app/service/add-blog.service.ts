import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../blog.model';
import { AuthService } from './auth.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddBlogService {

  constructor(
    private http: HttpClient,
    private authS: AuthService
  ) { }

  addBlog(blog: Blog){
    let authString = `${this.authS.cookies.get('email')}:${this.authS.cookies.get('password')}`

    return fetch('http://localhost:8080/Auth/addPost', { 
      method: 'POST', 
      headers: new Headers({ 
        'Authorization': 'Basic ' + btoa(authString), 
        'Content-Type': 'application/json' 
      }), 
      body: JSON.stringify({
        name : blog.name,
        content : blog.content,
        author : blog.author,
        category : blog.category,
        date: blog.date
        }), 
 
    }) 
      .catch((error) => { 
        console.error('Error:', error); 
      }); 

    // let headerHttp = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   Authorization: 'Basic ' + btoa(authString)
    // });

    // return this.http.post('http://localhost:8080/Auth/addPost', {
    //   name : blog.name,
    //   content : blog.content,
    //   author : blog.author,
    //   category : blog.category,
    //   date: blog.date
    // })
  }

  

  // getAllBlog(){
  //   let authString = `${this.authS.cookies.get('email')}:${this.authS.cookies.get('password')}`

  //   let headerHttp = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: 'Basic ' + btoa(authString)
  //   });

  //   console.log(this.http.get<Blog[]>('http://localhost:8080/getAllBlogs',{ headers: headerHttp }));

	// 	return this.http.get<Blog[]>('http://localhost:8080/getAllBlogs',{ headers: headerHttp })
	// }
}
