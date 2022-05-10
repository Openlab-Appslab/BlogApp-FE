import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../blog';



@Injectable({
  providedIn: 'root'
})
export class BlogDetailService {

    constructor(
        private readonly httpClient: HttpClient,

      ) { }

  getBlogDetail(blogName: string): Observable<Blog> {
      return this.httpClient.get<Blog>('http://localhost:8080/blog/' + blogName);
  }

 

 

}
