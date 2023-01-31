import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommonService } from 'src/app/website/service/common.service';

export class ShowPostServiceMock {

}

import { ShowPostService } from 'src/app/website/service/show-post.service';
describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ BlogsComponent ],
      providers: [
        {
          provide: ShowPostService,
          useClass: ShowPostServiceMock
        },
        ActivatedRoute,CommonService],
    })
    .compileComponents();
  });
  

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  
});
