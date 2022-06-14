import { Component, OnInit } from '@angular/core';
import { ShowPostService } from 'src/app/service/show-post.service';
import { Blog } from 'src/app/blog.model';
import { ActivatedRoute } from '@angular/router'
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-blogstmp',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  public blogs : any [];

  constructor(
    private showPostService: ShowPostService,
    private commonService: CommonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUserBlog();

    this.commonService.blogAdded_Observable.subscribe(res => {
      this.getUserBlog();
    });
  }


      getUserBlog(){
      this.showPostService.getUserBlog().subscribe(result => {
        console.log('user blogs ', result);
        this.blogs = result;
      })
    }
}
