import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog.model';
import { BlogDetailService } from '../service/blog-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs',
})
export class BlogDetailComponent implements OnInit {

  constructor(private blogService: BlogDetailService, private route: ActivatedRoute) { }

  blog: Blog;
  ngOnInit(): void {
    this.blogService.getBlogDetail(this.route.snapshot.paramMap.get('id')).subscribe(blog => this.blog = blog);
 }

}