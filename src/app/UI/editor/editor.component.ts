import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddBlogService } from 'src/app/service/add-blog.service';
import { Blog } from 'src/app/blog.model';
import { CommonService } from 'src/app/service/common.service';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import 'quill-emoji/dist/quill-emoji.js';
import Quill from 'quill';
import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter';

Quill.register('modules/blotFormatter', BlotFormatter);

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editorForm: FormGroup;
  editorContent: string;

  public htmlBody: string;

  modules = {}

  blured = false
  focused = false
  
  created(event){
    console.log('editor-created', event)
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {
    console.log('editor-change', event)
  }

  focus($event){
    console.log('focus', $event)
    this.focused = true
    this.blured = false
  }

  blur($event){
    console.log('blur', $event)
    this.focused = false
    this.blured = true    
  }

  ngOnInit(): void {
    this.editorForm = new FormGroup({
      // 'title': new FormControl(null),
      'editor': new FormControl(null)
      })
  }

  // onSubmit() {
  //   this.editorContent = this.editorForm.get('title').value;
  //   this.editorContent = this.editorForm.get('editor').value;
  //   console.log(this.editorForm.get('title').value);
  //   console.log(this.editorForm.get('editor').value);    
  // }

  maxLength(e){
    if(e.editor.getLength() > 10000){
      e.editor.deleteText(10, e.editor.getLength());
    }
  }

  // @ViewChild('closeBtn') closeBtn: ElementRef;

  public blog : Blog;

  html = '';

  constructor(
    private addBlogService: AddBlogService,
    private router: Router, 
    private commonService: CommonService
    ) 
    {
  	this.blog = new Blog();

    this.modules = {
      'emoji-shortname': true,
      'emoji-textarea': false,
      'emoji-toolbar': true,
      blotFormatter: {
        // empty object for default behaviour.
      },
      'toolbar': {
        container: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],

          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction

          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],

          ['clean'],                                         // remove formatting button

          ['link', 'image', 'video'],                         // link and image, video
          ['emoji'],
        ],
        handlers: { 'emoji': function () { } },

      }
    }
  }

  addBlog() {
  	if(this.blog.name && this.blog.content && this.blog.author && this.blog.category && this.blog.date){
  		this.addBlogService.addBlog(this.blog).then(res =>{
        this.commonService.notifyBlogAddition();
  		});
  	} else {
  		alert('Title and Description required');
  	}
  }

}
