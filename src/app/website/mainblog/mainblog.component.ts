import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router'
import { ShowPostService } from '../service/show-post.service';
import { Blog } from '../../blog.model';
import { CommonService } from '../service/common.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-mainblog',
  templateUrl: './mainblog.component.html',
  styleUrls: ['./mainblog.component.css'],
})
export class MainblogComponent implements OnInit {

  searchTerm = '';


  public blogs : Blog [];
  public techBlogs: Blog [];
  public zdravieBlogs: Blog [];
  public kulturaBlogs: Blog [];
  //date: number = Date.now();
  date: Date

  constructor(
    private titleService:Title, 
    private showPostService: ShowPostService,
    private commonService: CommonService,
    private route: ActivatedRoute,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
    ) {

      this.titleService.setTitle("Domov • Stránka plná zaujívamých blogov");
      iconRegistry.addSvgIconLiteral('hearth', sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>`));
      

    }

    ngOnInit(){
      this.getAllBlog();
      this.getTechBlogs();
      this.getZdravieBlogs();
      this.getKulturaBlogs();
      // this.getLikedBlogs();
  
      this.commonService.blogAdded_Observable.subscribe(res => {
        this.getAllBlog();
      });

      this.commonService.blogAdded_Observable.subscribe(res => {
        this.getTechBlogs();
      })

      this.commonService.blogAdded_Observable.subscribe(res => {
        this.getZdravieBlogs();
      })

      this.commonService.blogAdded_Observable.subscribe(res => {
        this.getKulturaBlogs();
      })
      // this.commonService.blogAdded_Observable.subscribe(res => {
      //   this.getLikedBlogs();
      // })
    }

    getAllBlog(){
      this.showPostService.getAllBlog(this.route.snapshot.paramMap.get('id')).subscribe(result => {
        console.log('result is', result);
        this.blogs = result;
        this.blogs[0].liked = true;
        this.blogs[1].liked = false;
        console.log(this.blogs);
        
      });
      return this.showPostService.getAllBlog(this.route.snapshot.paramMap.get('id')).subscribe(blog => this.blogs = blog);
    }  

    getTechBlogs(){
      this.showPostService.getTechBlogs(this.route.snapshot.paramMap.get('id')).subscribe(result => {
        console.log('Tech blogs:', result)
      })

      return this.showPostService.getTechBlogs(this.route.snapshot.paramMap.get('id')).subscribe(blog => this.techBlogs = blog);
    }

    getZdravieBlogs(){
      this.showPostService.getZdravieBlogs(this.route.snapshot.paramMap.get('id')).subscribe(result => {
        console.log('Zdravie blogs:', result)
      })

      return this.showPostService.getZdravieBlogs(this.route.snapshot.paramMap.get('id')).subscribe(blog => this.zdravieBlogs = blog);
    }

    getKulturaBlogs(){
      this.showPostService.getKulturaBlogs(this.route.snapshot.paramMap.get('id')).subscribe(result => {
        console.log('Kultura blogs:', result)
      })

      return this.showPostService.getKulturaBlogs(this.route.snapshot.paramMap.get('id')).subscribe(blog => this.kulturaBlogs = blog);
    }

    getDate(){
      this.date = new Date();
      this.date.getHours();
      
    }
    btnClicked(blog){
      blog.liked = !blog.liked
      
     }
    //  getLikedBlogs(){
    //   this.showPostService.getLikedBlogs(this.route.snapshot.paramMap.get('id')).subscribe(blog => this.likedBlogs = blog);
    //  }

     selectedDate: any;

     onSelect(event){
      console.log(event);
      this.selectedDate = event;
     }


    //  viewImage() {
    //   this.httpClient.get('http://localhost:8080/get/image/info/' + this.image)
    //     .subscribe(
    //       res => {
    //         this.postResponse = res;
    //         this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
    //       }
    //     );
    // }
}
