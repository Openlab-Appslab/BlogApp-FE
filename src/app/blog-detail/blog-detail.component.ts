import { Component, OnInit, Input, ViewEncapsulation  } from '@angular/core';
// import { Blog } from '../blog';
import { Blog } from '../blog.model';
import { ShowPostService } from '../website/service/show-post.service';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../website/service/common.service';
import { SafeHtmlPipe } from '../safe-html.pipe';
// importovať observable import { Observable } from 'rxjs';
import { observable, Observable } from 'rxjs';
// import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';

@Component({
  selector: 'app-blogs',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  // pridať public blog$: Observable<Blog>;
  public blog$: Observable<Blog>;

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

      // subscribe netreba, ngif rozhodne, či treba subsribovat
      this.blog$ = this.showPostService.getBlogDetail(this.route.snapshot.paramMap.get('id'));
    }


    selectedDate: any;

     onSelect(event){
      console.log(event);
      this.selectedDate = event;
     }

}
  