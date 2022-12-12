import { Component, OnInit } from '@angular/core';
import { ShowPostService } from 'src/app/website/service/show-post.service';
import { Blog } from 'src/app/blog.model';
import { ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blogs-admin',
  templateUrl: './blogs-admin.component.html',
  styleUrls: ['./blogs-admin.component.css']
})
export class BlogsAdminComponent implements OnInit {

  public blogs: Blog [];

  constructor(
    private showPostService: ShowPostService,
        private route: ActivatedRoute,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer

  ) { }

  ngOnInit(): void {
    this.getAllBlog();
  }

  getAllBlog(){
      this.showPostService.getAllBlog(this.route.snapshot.paramMap.get('id')).subscribe(result => {
        console.log('result is', result);
        this.blogs = result;
        
      });
      return this.showPostService.getAllBlog(this.route.snapshot.paramMap.get('id')).subscribe(blog => this.blogs = blog);
    } 

}
