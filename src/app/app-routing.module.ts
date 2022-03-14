import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainblogComponent } from './mainblog/mainblog.component';
import { LoginComponent } from './service/login/login.component';
import { RegisterComponent } from './service/register/register.component';

const routes: Routes = [
  { path: '', component: MainblogComponent},
  { path: 'mainblog', component: MainblogComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
