import { Component, OnInit } from '@angular/core';
// import { Blog } from '../blog';
import { Blog } from '../blog.model';
import { ShowPostService } from '../service/show-post.service';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  public blog: Blog;

  constructor(
    private showPostService: ShowPostService, 
    private route: ActivatedRoute,
    private commonService: CommonService
    ) { }

    ngOnInit(){
      this.getBlog();
  
      // this.commonService.blogAdded_Observable.subscribe(res => {
      //   this.getAllBlog();
      // });
    }
  
  
  
    getBlog(){
      return this.showPostService.getBlog(this.route.snapshot.paramMap.get('id')).subscribe(blog => this.blog = blog);
    }

}
