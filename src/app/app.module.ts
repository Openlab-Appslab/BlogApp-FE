import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { MainblogComponent } from './mainblog/mainblog.component'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ContactComponent } from './contact/contact.component';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponent } from './User/shared/shared.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { ResetpasswordComponent } from './login/resetpassword/resetpassword.component';
import { MailrespondComponent } from './login/mailrespond/mailrespond.component';

// import { ModalModule } from 'ngx-bootstrap/modal';
// import { NgxTimelineModule } from 'ngx-timeline';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { UserService } from './user.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthService } from './service/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { CookieService } from 'ngx-cookie-service'
import { BlogsComponent } from './blogs/blogs.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainblogComponent,
    ContactComponent,
    SharedComponent,
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    MailrespondComponent,
    BlogsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MdbValidationModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // BsDatepickerModule.forRoot(),
    // NgxTimelineModule,
    // ModalModule.forRoot(),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [
   // CookieService,
    UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
