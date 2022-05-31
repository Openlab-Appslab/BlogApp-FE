import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { HttpErrorResponse } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogApp';

  public users: user[];


}
