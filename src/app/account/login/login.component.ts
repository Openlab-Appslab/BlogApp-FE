import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { user } from '../../user';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: user[] = [];

  model = new user( '', '', "");

  constructor(
    private location: Location,
    private router: Router,
    private readonly loginService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
      this.loginService.login(this.model)
  } 
 
} 