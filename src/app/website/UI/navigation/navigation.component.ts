import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../website/service/auth.service';
import { user } from '../../../user';
import { CookieService } from 'ngx-cookie-service';
import { UserDetailService } from 'src/app/website/service/user-detail.service';
import { User } from '@auth0/auth0-angular';
import { ShowPostService } from 'src/app/website/service/show-post.service';
import { ActivatedRoute } from '@angular/router';
import { profileUser } from 'src/app/userdetail.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public user: User;

  constructor(
    private readonly loginService: AuthService,
    private cookies: CookieService,
    private userDetailService: UserDetailService,
    private showPostService: ShowPostService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.getUserDetail();
  }

  // getUserDetail(){
  //   this.userDetailService.getUserDetail().subscribe(result => {
  //     console.log('user detail is ', result);
  //     this.user = result;
  //   })
  // }

}
