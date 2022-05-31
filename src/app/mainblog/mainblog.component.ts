import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BlogDetailService } from '../service/blog-detail.service';
import { Blog } from '../blog';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-mainblog',
  templateUrl: './mainblog.component.html',
  styleUrls: ['./mainblog.component.css']
})
export class MainblogComponent implements OnInit {

  constructor(private titleService:Title, private blogService: BlogDetailService, private route: ActivatedRoute) {
    this.titleService.setTitle("Domov • Stránka plná zaujívamých blogov");
  }

  blog: Blog;

  ngOnInit(): void {
     this.blogService.getBlogDetail(this.route.snapshot.paramMap.get('id')).subscribe(blog => this.blog = blog);
  }


}
