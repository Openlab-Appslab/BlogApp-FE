import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { Blog } from '../blog.model';
import { ActivatedRoute } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';
import { ShowPostService } from '../service/show-post.service';
import { Blog } from '../blog.model';
import { CommonService } from '../service/common.service';
import { AddBlogService } from '../service/add-blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mainblog',
  templateUrl: './mainblog.component.html',
  styleUrls: ['./mainblog.component.css']
})
export class MainblogComponent implements OnInit {

  public blogs : Blog [];

  constructor(
    private titleService:Title, 
    private showPostService: ShowPostService,
    private commonService: CommonService,
    private route: ActivatedRoute
    ) {

      this.titleService.setTitle("Domov • Stránka plná zaujívamých blogov");

    }

    ngOnInit(){
      this.getAllBlog();

  
      this.commonService.blogAdded_Observable.subscribe(res => {
        this.getAllBlog();
      });
    }

    getAllBlog(){
      this.showPostService.getAllBlog(this.route.snapshot.paramMap.get('id')).subscribe(result => {
        console.log('result is', result);
        this.blogs = result;
        
      });
      // return this.showPostService.getAllBlog(this.route.snapshot.paramMap.get('id')).subscribe(blog => this.blogs = blog);
    }  

}
