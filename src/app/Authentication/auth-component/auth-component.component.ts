import { Component, OnInit } from '@angular/core';
//import { AuthService, AuthResponseData } from '../shared/auth.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//import { ACrudService } from '../shared/acrud.service'

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
