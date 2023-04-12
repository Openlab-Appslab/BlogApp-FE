import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddBlogService } from 'src/app/website/service/add-blog.service';
import { Blog } from 'src/app/blog.model';
import { CommonService } from 'src/app/website/service/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import 'quill-emoji/dist/quill-emoji.js';
import Quill from 'quill';
import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter';

Quill.register('modules/blotFormatter', BlotFormatter);

interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editorForm: FormGroup;
  editorContent: string;
  editorTitle: string;

  public htmlBody: string;
  public htmlTitle: string;

  modules = {}
  modTitle = {}

  blured = false
  focused = false

  selectedValue: string;
  selectedFile: File;

  categories: Category[] = [
    {value: 'Kultúra', viewValue: 'Kultúra'},
    {value: 'Tech', viewValue: 'Tech'},
    {value: 'Priroda', viewValue: 'Príroda'},
    {value: 'Politika', viewValue: 'Politika'},
    {value: 'Zdravie', viewValue: 'Zdravie'},
    {value: 'Svetadiel', viewValue: 'Svetadiel'},
  ];

  created(event){
    console.log('editor-created', event)
  }
  createdTitle(event){
    console.log('title-editor-created', event)
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
      'editor': new FormControl(null),
      'editorTitle': new FormControl(null)
      })

  }

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
    private commonService: CommonService,
    private route: ActivatedRoute,
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

    this.modTitle = {
      'emoji-shortname': true,
      'emoji-textarea': false,
      'emoji-toolbar': true,
      'toolbar': {
        container: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote'],

          [{ 'header': 1 }, { 'header': 2 }],               // custom button values                      

          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],

          ['clean'],                                         // remove formatting button                   
          ['emoji'],
        ],
        handlers: { 'emoji': function () { } },

      }
    }
  }

  addBlogGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    blog: new FormControl('', Validators.required),
    //date: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  })

  addBlog(){
    console.log(this.addBlogGroup.value);
    const { name, title, content, category, author } = this.addBlogGroup.value;

    this.addBlogService.addBlog({name, title, content, category, author}, this.selectedFile)
      .subscribe(() => {
        this.commonService.notifyBlogAddition();
        this.router.navigate(['../../../mainblog'], { relativeTo: this.route });
      });
  }

  onFileChange(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  // addBlog() {
  // 	if(this.blog.name && this.blog.title && this.blog.content && this.blog && this.blog.category && this.blog.date && 'image'){
  // 		this.addBlogService.addBlog(this.blog).then(res =>{
  //       this.commonService.notifyBlogAddition();
  //       this.router.navigate(['../../../mainblog'], { relativeTo: this.route });
  // 		});
  // 	} else {
  // 		alert('something missing');
  // 	}
  //   }
  }