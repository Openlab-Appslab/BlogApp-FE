import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddBlogService } from 'src/app/service/add-blog.service';
import { Blog } from 'src/app/blog.model';
import { CommonService } from 'src/app/service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  // editorForm: FormGroup;
  // editorContent: string;

  // editorStyle ={
  //   height: '300px',
  // }

  // config = {
  //   toolbar: [
  //     ['bold', 'italic', 'underline']
  //   ]
  // }

  ngOnInit(): void {
    // this.editorForm = new FormGroup({
    //   'title': new FormControl(null),
    //   'editor': new FormControl(null)

    // })
  }

  // onSubmit() {
  //   this.editorContent = this.editorForm.get('title').value;
  //   this.editorContent = this.editorForm.get('editor').value;
  //   console.log(this.editorForm.get('title').value);
  //   console.log(this.editorForm.get('editor').value);    
  // }

  // maxLength(e){
  //   if(e.editor.getLength() > 10000){
  //     e.editor.deleteText(10, e.editor.getLength());
  //   }
  // }

  @ViewChild('closeBtn') closeBtn: ElementRef;
  public blog : Blog;

  constructor(
    private addBlogService: AddBlogService,
    private router: Router, 
    private commonService: CommonService
    ) 
    {
  	this.blog = new Blog();
  }

  addBlog() {
  	if(this.blog.name && this.blog.content && this.blog.author && this.blog.category && this.blog.date){
  		this.addBlogService.addBlog(this.blog).subscribe(res =>{
  			this.closeBtn.nativeElement.click();
        this.commonService.notifyBlogAddition();
  		});
  	} else {
  		alert('Title and Description required');
  	}
  }

}
