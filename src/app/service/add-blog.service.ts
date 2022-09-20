import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../blog.model';
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

  addBlog(blog: Blog){
    let authString = `${this.authS.cookies.get('email')}:${this.authS.cookies.get('password')}`
    this.showModal();

    return fetch('http://localhost:8080/Auth/addPost', { 
      method: 'POST', 
      headers: new Headers({ 
        'Authorization': 'Basic ' + btoa(authString), 
        'Content-Type': 'application/json' 
      }), 
      body: JSON.stringify({
        name : blog.name,
        title: blog.title,
        content : blog.content,
        author : blog.author,
        category : blog.category,
        date: blog.date
        // titlephoto: blog.titlephoto
        }),  
    }) 
      .catch((error) => { 
        console.error('Error:', error); 
      }); 
  }

  showModal(): void {
    this.modal.open(ModalComponent);
  }

}
