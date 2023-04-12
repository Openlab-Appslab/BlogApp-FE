import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { of } from 'rxjs';

import { BlogsAdminComponent } from './blogs-admin.component';
import { ShowPostService } from 'src/app/website/service/show-post.service';
import { DeleteblogsService } from 'src/app/website/service/deleteblogs.service';
import { Blog } from 'src/app/blog.model';

describe('BlogsAdminComponent', () => {
  let component: BlogsAdminComponent;
  let fixture: ComponentFixture<BlogsAdminComponent>;
  let showPostServiceSpy: jasmine.SpyObj<ShowPostService>;
  let deleteBlogsServiceSpy: jasmine.SpyObj<DeleteblogsService>;

  beforeEach(async () => {
    const showPostSpy = jasmine.createSpyObj('ShowPostService', ['getAllBlog']);
    const deleteBlogsSpy = jasmine.createSpyObj('DeleteblogsService', ['deleteBlogs']);

    await TestBed.configureTestingModule({
      declarations: [BlogsAdminComponent],
      providers: [
        { provide: ShowPostService, useValue: showPostSpy },
        { provide: DeleteblogsService, useValue: deleteBlogsSpy },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' } } } },
        MatIconRegistry,
        DomSanitizer,
      ],
    }).compileComponents();

    showPostServiceSpy = TestBed.inject(ShowPostService) as jasmine.SpyObj<ShowPostService>;
    deleteBlogsServiceSpy = TestBed.inject(DeleteblogsService) as jasmine.SpyObj<DeleteblogsService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // describe('getAllBlog', () => {
  //   it('should call showPostService.getAllBlog and set the blogs property', () => {
  //     const blogs: Blog[] = [ 
  //     { id: 1, title: 'Blog 1', name: 'Blog One', content: 'This is blog one', author: 'John Doe', category: 'Nature', date: '23.2.2023', liked: 'true',image: 'image1.jpg'},
  //     { id: 2, title: 'Blog 2', name: 'Blog Two', content: 'This is blog two', author: 'Jane Smith', category: 'Sports', date: '23.2.2023' , liked: 'true', image: 'image2.jpg'}];
  //     showPostServiceSpy.getAllBlog.and.returnValue(of(blogs));

  //     component.getAllBlog();

  //     expect(showPostServiceSpy.getAllBlog).toHaveBeenCalledWith('1');
  //     expect(component.blogs).toEqual(blogs);
  //   });
  // });

  // describe('deleteBlogs', () => {
  //   it('should call deleteBlogsService.deleteBlogs and call getAllBlog', () => {
  //     const blogId = 1;
  //     deleteBlogsServiceSpy.deleteBlogs.and.returnValue(of(null));
  //     spyOn(component, 'getAllBlog');

  //     component.deleteBlogs(blogId);

  //     expect(deleteBlogsServiceSpy.deleteBlogs).toHaveBeenCalledWith(blogId);
  //     expect(component.getAllBlog).toHaveBeenCalled();
  // //   });
  // });
});
