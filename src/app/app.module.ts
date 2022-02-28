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
import { environment } from "src/environments/environment";

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponent } from './User/shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainblogComponent,
    ContactComponent,
    SharedComponent,
  
   

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
    

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
