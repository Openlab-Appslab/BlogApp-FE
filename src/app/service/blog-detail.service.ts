import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../blog.model';



@Injectable({
  providedIn: 'root'
})
export class BlogDetailService {

  constructor(
    private http: HttpClient
  ) {

  }

  getAllBlog(){
    return this.http.blog('localhost:8080/blogs', {})
  }

}
