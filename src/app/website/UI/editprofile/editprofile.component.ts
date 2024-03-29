import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../website/service/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { UserDetailService } from 'src/app/website/service/user-detail.service';
import { User } from '@auth0/auth0-angular';
import { ShowPostService } from 'src/app/website/service/show-post.service';
import { ActivatedRoute } from '@angular/router';
import { profileUser } from 'src/app/userdetail.model';
import { FormGroup } from '@angular/forms';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { AccountService, AlertService } from '../../../website/_services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/website/service/common.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CommonUserService } from 'src/app/website/service/common-user.service';
import { user } from '../../../user';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

 user: User;

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
    private commonUserService: CommonUserService,
   private readonly http: HttpClient,
    private authS: AuthService,
  ) {
    
   }


  userForm = new FormGroup({

    fullname: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    // email: new FormControl('', Validators.required),

  })

  test(){
    console.log(this.userForm.value);
  }

  ngOnInit(): void {
    this.getUserDetail();
  }

  // getUserDetail(){
  //   this.userDetailService.getUserDetail().subscribe(result => {
  //     console.log('user detail is ', result);
  //     this.user = result;
  //   })
  // }


  editUser(): void {
     if(this.userForm.valid) {
      const fullname = this.userForm.value.fullname;
      const username = this.userForm.value.username;
      const address = this.userForm.value.address;
      const telephone = this.userForm.value.telephone;

      this.userDetailService.editUser(fullname, username, address, telephone).then(res =>{
              this.commonUserService.notifyUserEddition();
        		});
        	}
      

    }
    getUserDetail()
    {
    this.userDetailService.getUserDetail().subscribe(user => 
      {
      this.user = user;
      this.userForm.patchValue(
        {
        fullname: user.fullname,
        username: user.username,
        address: user.address,
        telephone: user.telephone,
      })
    });
    
      
    }
}
