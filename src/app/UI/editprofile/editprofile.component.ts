import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { UserDetailService } from 'src/app/service/user-detail.service';
import { User } from '@auth0/auth0-angular';
import { ShowPostService } from 'src/app/service/show-post.service';
import { ActivatedRoute } from '@angular/router';
import { profileUser } from 'src/app/userdetail.model';
import { FormGroup } from '@angular/forms';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { AccountService, AlertService } from '../../_services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { user } from '../../user'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  public user: User;

  constructor(
    private formBuilder: FormBuilder,
    private readonly loginService: AuthService,
    private cookies: CookieService,
    private userDetailService: UserDetailService,
    private showPostService: ShowPostService, 
    private route: ActivatedRoute, 
    private alertService: AlertService,
    private router: Router,
    private accountService: AccountService,
    private commonService: CommonService,
    private readonly http: HttpClient,
    private authS: AuthService,
  ) {
    this.user = new User();
   }


  loggedInEmail: string;

  userForm = new FormGroup({

    fullname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),

  })



  

  ngOnInit(): void {
    this.getUserDetail();
    
    this.loggedInEmail = this.cookies.get('username');

    this.loginService.userSubject.asObservable().subscribe(() => {
      this.loggedInEmail = this.cookies.get('username');
    })
  }



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

  // editUser() {
  // 	if(this.user.fullname && this.user.surname && this.user.address && this.user.telephone && this.user.email){
  // 		this.userDetailService.editUser(this.user).then(res =>{
  //       this.commonService.notifyBlogAddition();
  // 		});
  // 	} else {
  // 		alert('rfsfw');
  // 	}
  // }

  // editUser(fullname: string, username: string, address: string, telephone: string, email: string): Observable<any>{
  //   return this.http.post('http://localhost:8080/Auth/EditUser', {
  //     fullname,
  //     username,
  //     address,
  //     telephone,
  //     email
  //   })
  // }

}
