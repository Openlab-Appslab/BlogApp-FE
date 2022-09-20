import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MainblogComponent } from './mainblog/mainblog.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ContactComponent } from './contact/contact.component';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponent } from './User/shared/shared.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ResetpasswordComponent } from './account/resetpassword/resetpassword.component';
import { MailrespondComponent } from './account/mailrespond/mailrespond.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { EditorComponent } from './UI/editor/editor.component';
import { QuillModule } from 'ngx-quill';
import { ProfileComponent } from './UI/profile/profile.component';
import { EditprofileComponent } from './UI/editprofile/editprofile.component';
import { LikedblogsComponent } from './UI/likedblogs/likedblogs.component';
import { UnreadblogsComponent } from './UI/unreadblogs/unreadblogs.component';
import { NavigationComponent } from './UI/navigation/navigation.component';
import { PublicComponent } from './UI/public/public.component';
import { PrivateComponent } from './UI/private/private.component';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { AuthGuard } from './auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LatestblogComponent } from './UI/latestblog/latestblog.component';
import { BlogsComponent } from './UI/blogs/blogs.component';
import BlotFormatter from 'quill-blot-formatter/dist/BlotFormatter';
import { SafeHtmlPipe } from './safe-html.pipe';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from '@angular/material/core';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    DialogComponent,
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
    BlogDetailComponent,
    EditorComponent,
    ProfileComponent,
    EditprofileComponent,
    LikedblogsComponent,
    UnreadblogsComponent,
    NavigationComponent,
    PublicComponent,
    PrivateComponent,
    DialogComponent,
    LatestblogComponent,
    BlogsComponent,
    SafeHtmlPipe,
    ModalComponent,
  ],

  imports: [
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDialogModule,
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
    QuillModule.forRoot(),
   

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [AuthService, AuthGuard, CookieService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor,
       multi: true
    }
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
