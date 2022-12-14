import { Component, OnInit, Input, ViewEncapsulation  } from '@angular/core';
// import { Blog } from '../blog';
import { Blog } from '../blog.model';
import { ShowPostService } from '../website/service/show-post.service';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../website/service/common.service';
import { SafeHtmlPipe } from '../safe-html.pipe';

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
    ) { 
    }

    ngOnInit(){
      this.getBlogDetail();
  
      // this.commonService.blogAdded_Observable.subscribe(res => {
      //   this.getBlog();
      // });

      // this.showPostService.getBlogDetail(this.route.snapshot.paramMap.get('id')).subscribe(blog => this.blog = blog);
    }
  
    getBlogDetail(){
      // this.showPostService.getBlogDetail(this.route.snapshot.paramMap.get('id')).subscribe(blog => this.blog = blog);      

      this.showPostService.getBlogDetail(this.route.snapshot.paramMap.get('id')).subscribe(result => {
        console.log('result is', result);
        this.blog = result;
      });
    }

    selectedDate: any;

     onSelect(event){
      console.log(event);
      this.selectedDate = event;
     }

}
