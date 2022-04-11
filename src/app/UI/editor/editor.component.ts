import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editorForm: FormGroup;
  editorContent: string;

  editorStyle ={
    height: '300px',
  }

  config = {
    toolbar: [
      ['bold', 'italic', 'underline']
    ]
  }

  constructor() { }

  ngOnInit(): void {
    this.editorForm = new FormGroup({
      'title': new FormControl(null),
      'editor': new FormControl(null)

    })
  }

  onSubmit() {
    this.editorContent = this.editorForm.get('title').value;
    this.editorContent = this.editorForm.get('editor').value;
    console.log(this.editorForm.get('title').value);
    console.log(this.editorForm.get('editor').value);    
  }

  maxLength(e){
    if(e.editor.getLength() > 10000){
      e.editor.deleteText(10, e.editor.getLength());
    }
  }

}
