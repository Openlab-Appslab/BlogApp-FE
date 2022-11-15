import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { user } from '../../user';
import { AuthService } from 'src/app/website/service/auth.service';
import { Router } from '@angular/router';
import { User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: user[] = [];

  model = new user( '', '', "", "", "", "");

  constructor(
    private location: Location,
    private router: Router,
    private readonly loginService: AuthService,
  ) { 
    if(this.loginService.isLoggedIn()){
      this.router.navigate(['/mainblog']);
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
      this.loginService.login(this.model)
  } 
 
} 