import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-mainblog',
  templateUrl: './mainblog.component.html',
  styleUrls: ['./mainblog.component.css']
})
export class MainblogComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Domov • Stránka plná zaujívamých blogov");
  }

  ngOnInit(): void {
  }

}
