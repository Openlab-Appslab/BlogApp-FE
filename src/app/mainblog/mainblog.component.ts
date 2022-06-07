import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { Blog } from '../blog.model';
import { ActivatedRoute } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';
import { BlogDetailService } from '../service/blog-detail.service';
import { Blog } from '../blog.model';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-mainblog',
  templateUrl: './mainblog.component.html',
  styleUrls: ['./mainblog.component.css']
})
export class MainblogComponent implements OnInit {

  constructor(
    private titleService:Title, 
    private blogService: BlogDetailService,
    private commonService: CommonService,
    private route: ActivatedRoute
    ) {

      this.titleService.setTitle("Domov • Stránka plná zaujívamých blogov");

    }

  blog: Blog;

  ngOnInit() {
     this.getAllBlog();

     this.commonService.blogAdded_Observable.subscribe(res => {
       this.getAllBlog();
     })
  }

  getAllBlog(){
    this.blogService.getAllBlog().subscribe(result => {
      console.log('result is: ', result);
      this.blog = result['data'];
    } )
  }


}
