import { Component, OnInit } from '@angular/core';
import { ShowUsersService } from '../service/show-users.service';
import { AuthService } from 'src/app/website/service/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from '@angular/router';
import { User } from '@auth0/auth0-angular';
import { user } from 'src/app/user';
import { DeleteusersService } from 'src/app/website/service/deleteusers.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  public admins: User[];

  constructor(
    private deleteUsersService: DeleteusersService,
    private showUserService: ShowUsersService,
    private readonly loginService: AuthService,
    private cookies: CookieService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getAllAdmins();
  }

  getAllAdmins(){
    this.showUserService.getAllAdmins().subscribe(result => {
      console.log('user detail is ', result);
      this.admins = result;
    })
  }

  deleteAdmin(userId: number){ //function for deleting the listing by using the listingId
    this.deleteUsersService.deleteUsers(userId).subscribe(
      (response: void) => {
        console.log('admin deleted');
        this.getAllAdmins();
      }
    );
  }

}
