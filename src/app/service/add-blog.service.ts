import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../blog.model';

@Injectable({
  providedIn: 'root'
})
export class AddBlogService {

  constructor(
    private http: HttpClient
  ) { }

  addBlog(blog: Blog){
    return this.http.post('http://localhost:8080/noAuth/blog/blogCreate', {
      title : blog.name,
      content : blog.content,
      author : blog.author,
      category : blog.category,
      date: blog.date
    })
  }
}
