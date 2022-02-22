import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { MainblogComponent } from './mainblog/mainblog.component'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { environment } from "src/environments/environment";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AuthComponentComponent } from './Authentication/auth-component/auth-component.component';
import { ResetpasswordComponent } from './Authentication/resetpassword/resetpassword.component';
import { VerifyMailComponent } from './Authentication/verify-mail/verify-mail.component';
import { HomeComponent } from './Unauthenticated/home/home.component';
import { UCreatePostComponent } from './Unauthenticated/u-create-post/u-create-post.component';
import { UpostDetailComponent } from './Unauthenticated/upost-detail/upost-detail.component';
//import { ACrudService } from './Authentication/shared/acrud.service';
//import { CrudService } from './Unauthenticated/shared/crud.service';
import { ToastrModule } from 'ngx-toastr';
//import { AuthService } from './Authentication/shared/auth.service';
import { NoSanitizePipe } from './Authentication/shared/no-sanitize.pipe';
//import { AuthGuard } from './Authentication/shared/auth-guard.service';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainblogComponent,
    ContactComponent,
    AuthComponentComponent,
    ResetpasswordComponent,
    VerifyMailComponent,
    HomeComponent,
    UCreatePostComponent,
    UpostDetailComponent,
    NoSanitizePipe,
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,    
    ReactiveFormsModule,
    MdbValidationModule,
    MDBBootstrapModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    BrowserModule,
    ToastrModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  
  providers: [
    //CrudService,
    //AuthService,
    //ACrudService,
    //AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
