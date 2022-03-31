import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RegService } from 'src/app/service/reg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = 'register';
  reactiveForm: FormGroup;

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  constructor(
    private readonly regService: RegService,
    private readonly router: Router,
    private formBuilder: FormBuilder,
  ) {
  this.reactiveForm = this.formBuilder.group(
  {
    username: new FormControl([''], [Validators.required]),
    email: new FormControl([''], [Validators.required]),
    password: new FormControl([''], [Validators.required]),
    confirm_password: new FormControl([''], [Validators.required])
  },
  {
    validator: this.MustMatch('password', 'confirmPassword'),
  }
  );
}

  ngOnInit(): void {
  }

}
