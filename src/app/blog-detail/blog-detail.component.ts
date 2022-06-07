import { Component, OnInit } from '@angular/core';
// import { Blog } from '../blog';
import { Blog } from '../blog.model';
import { BlogDetailService } from '../service/blog-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  constructor(
    private blogService: BlogDetailService, 
    private route: ActivatedRoute
    ) { }

  blog: Blog;

  ngOnInit(): void {
  }

}
