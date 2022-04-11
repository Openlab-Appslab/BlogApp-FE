import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RegService } from 'src/app/service/reg.service';
import { Router } from '@angular/router';
import {FooterRowOutlet} from "@angular/cdk/table";
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService, AlertService } from '../../_services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // title = 'Register • BlogPlex';



  // constructor(
  //   private readonly regService: RegService,
  //   private readonly router: Router,
  // ) { }

  // ngOnInit(): void {
  // }

  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private accountService: AccountService,
      private alertService: AlertService
  ) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
          username: ['', Validators.required],
          email: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      this.accountService.register(this.form.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                  this.router.navigate(['../login'], { relativeTo: this.route });
              },
              error: error => {
                  this.alertService.error(error);
                  this.loading = false;
              }
          });
  }
}
