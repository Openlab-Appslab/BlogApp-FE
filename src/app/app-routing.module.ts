import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { MainblogComponent } from './mainblog/mainblog.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  { path: '', component: MainblogComponent},
  { path: 'mainblog', component: MainblogComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'editor', component: EditorComponent},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
