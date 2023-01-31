import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../../blog.model';
import { AuthService } from './auth.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AddBlogService {

  constructor(
    private http: HttpClient,
    private authS: AuthService,
    private modal: MatDialog
  ) { }

  addBlog(name: string, title: string, content: string, author: string, category: string, date: string, image: string): Observable<any>{
    let authString = `${this.authS.cookies.get('email')}:${this.authS.cookies.get('password')}`

    let headerHttp = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(authString)
    });
    
    const formData = { 
      name, title, content, author, category, date, image}
    // formData.append('name', name);
    // formData.append('title', title);
    // formData.append('content', content);
    // formData.append('author', author);
    // formData.append('category', category);
    // formData.append('date', date);
    // formData.append('image', image);

    console.log(formData);

    return this.http.post('http://localhost:8080/Auth/addPost', formData, { headers: headerHttp })
    
  }

  // addBlog(blog: Blog){
  //   let authString = `${this.authS.cookies.get('email')}:${this.authS.cookies.get('password')}`
  //   this.showModal();


  //   return fetch('http://localhost:8080/Auth/addPost', { 
  //     method: 'POST', 
  //     headers: new Headers({ 
  //       'Authorization': 'Basic ' + btoa(authString), 
  //       'Content-Type': 'application/json' 
  //     }),
  //     body: JSON.stringify({
  //       name : blog.name,
  //       title: blog.title,
  //       content : blog.content,
  //       author : blog.author,
  //       category : blog.category,
  //       date: blog.date,
  //       image: blog.image
  //       // titlephoto: blog.titlephoto
  //       }),  
        
  //   }) 
  //     .catch((error) => { 
  //       console.error('Error:', error); 
  //     }); 
  // }

  showModal(): void {
    this.modal.open(ModalComponent);
  }

}
