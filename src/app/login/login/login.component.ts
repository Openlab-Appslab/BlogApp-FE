import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  loginGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    
  ) { }

  login() {
    if (this.loginGroup.valid){
      const email = this.loginGroup.value.email;
      const password = this.loginGroup.value.password;
      this.authService.login(email, password)
        .subscribe(() => this.router.navigateByUrl('/mainblog'));
    }
  }

  ngOnInit(): void {
    
   }

}
