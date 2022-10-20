import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { user } from '../../user';
import { CookieService } from 'ngx-cookie-service';
import { UserDetailService } from 'src/app/service/user-detail.service';
import { User } from '@auth0/auth0-angular';
import { ShowPostService } from 'src/app/service/show-post.service';
import { ActivatedRoute } from '@angular/router';
import { profileUser } from 'src/app/userdetail.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  /*public profile: ProfileComponent;*/
  public user: User;

  constructor(
    private readonly loginService: AuthService,
    private cookies: CookieService,
    private userDetailService: UserDetailService,
    private showPostService: ShowPostService, 
    private route: ActivatedRoute,   
  ) { }

  // private user: User;
  // private profileUser: profileUser;

  // users: user[] = [];
  // userProfiles: profileUser[] = [];

  loggedInEmail: string;

  ngOnInit(): void {
    this.getUserDetail();
    
    this.loggedInEmail = this.cookies.get('username');

    this.loginService.userSubject.asObservable().subscribe(() => {
      this.loggedInEmail = this.cookies.get('username');
    })

   /* this.getProfileDetail();*/

  }

  // model = new user( "", "", "");
  // modelUserDetail = new profileUser("", "", "", "",)

  onlogout() { 
    this.loginService.logoutUser();
    location.reload();
  }

  getUserDetail(){
    this.userDetailService.getUserDetail().subscribe(result => {
      console.log('user detail is ', result);
      this.user = result;
    })
  }


  
  // getUserProfileDetail(){
  //   // this.showPostService.getBlogDetail(this.route.snapshot.paramMap.get('id')).subscribe(blog => this.blog = blog);      

  //   this.showPostService.getProfileDetail().subscribe(result => {
  //     console.log('result is', result);
  //     this.user = result;
  //   });
  // }

}
