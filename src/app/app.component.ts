import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogApp';

  public users: User[];
  
  constructor(
    private userService: UserService,
  ) {}

  public getUser(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }  
    ); 
  }
}