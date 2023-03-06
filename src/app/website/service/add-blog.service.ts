import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AuthService } from './auth.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

interface BlogData {
  name: string;
  title: string;
  content: string;
  author: string;
  category: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class AddBlogService {

  constructor(
    private http: HttpClient,
    private authS: AuthService,
    private modal: MatDialog
  ) { }

  addBlog(blog: BlogData, image: File): Observable<any>{
    const authString = `${this.authS.cookies.get('email')}:${this.authS.cookies.get('password')}`
    const headerHttp = new HttpHeaders({
      Authorization: 'Basic ' + btoa(authString)
    });

    const formData: FormData = new FormData();
    formData.append('data', JSON.stringify(blog));
    formData.append('image', image, image.name);

    return this.http.post('http://localhost:8080/Auth/addPost', formData, { headers: headerHttp });
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
