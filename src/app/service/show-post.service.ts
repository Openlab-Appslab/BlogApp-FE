import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../blog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowPostService {

  constructor(
    private http: HttpClient
  ) { }

  getAllBlog(){
		return this.http.get<Blog[]>('http://localhost:8080/noAuth/blog/getAllBlogs',{})
	}

  getBlog(blogName: string): Observable<Blog> {
    return this.http.get<Blog>('http://localhost:8080/noAuth/blog/' + blogName);
  }
}
