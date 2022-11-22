import { Component, OnInit } from '@angular/core';
import { ShowUsersService } from '../service/show-users.service';
import { AuthService } from 'src/app/website/service/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { User } from '@auth0/auth0-angular';
import { user } from 'src/app/user';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  public users: User [];

  constructor(
    private showUserService: ShowUsersService,
    private readonly loginService: AuthService,
    private cookies: CookieService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.showUserService.getAllUsers().subscribe(result => {
      console.log('user detail is ', result);
      this.users = result;
    })
  }

    // export class NgbdTablePagination {
  //   page = 1;
  //   pageSize = 4;
  //   collectionSize = user.length;
  //   users: User[];
  
  //   constructor() {
  //     this.refreshCountries();
  //   }
  
  //   refreshCountries() {
  //     this.users = users.map((country, i) => ({ id: i + 1, ...country })).slice(
  //       (this.page - 1) * this.pageSize,
  //       (this.page - 1) * this.pageSize + this.pageSize,
  //     );
  //   }

}
