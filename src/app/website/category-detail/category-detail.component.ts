import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/blog.model';
import { ShowPostService } from '../service/show-post.service';
import { Observable } from 'rxjs';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  public blogsByCategory: Blog[];

  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
    private showPostService: ShowPostService
  ) { }

  ngOnInit(): void {
    this.getBlogByCategory();
    
    this.commonService.blogAdded_Observable.subscribe(res => {
      this.getBlogByCategory();
    })
  }

  // getTechBlogs(){
  //   this.showPostService.getTechBlogs(this.route.snapshot.paramMap.get('id')).subscribe(result => {
  //     console.log('Tech blogs:', result)
  //   })

  //   return this.showPostService.getTechBlogs(this.route.snapshot.paramMap.get('id')).subscribe(blog => this.techBlogs = blog);
  // }

  getBlogByCategory(){
    this.showPostService.getBlogByCategory(this.route.snapshot.paramMap.get('category')).subscribe(result => {
      console.log('Blogs by category:', result)
    })

    return this.showPostService.getBlogByCategory(this.route.snapshot.paramMap.get('category')).subscribe(blog => this.blogsByCategory = blog);
  }

}
