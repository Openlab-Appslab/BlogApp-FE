import { Component, OnInit, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-editor1',
  templateUrl: './editor1.component.html',
  styleUrls: ['./editor1.component.css']
})
export class Editor1Component implements OnInit {

  @Input() html: string;
  
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

}
