import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';
import { MainblogComponent } from './mainblog/mainblog.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { EditorComponent } from './UI/editor/editor.component';
import { NavigationComponent } from './UI/navigation/navigation.component';
import { ProfileComponent } from './UI/profile/profile.component';
import { EditprofileComponent } from './UI/editprofile/editprofile.component';
import { UnreadblogsComponent} from './UI/unreadblogs/unreadblogs.component';
import { LikedblogsComponent } from './UI/likedblogs/likedblogs.component';
import { PublicComponent } from './UI/public/public.component';
import { PrivateComponent } from './UI/private/private.component';

const routes: Routes = [
  { path: '', component: MainblogComponent},
  { path: 'mainblog', component: MainblogComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'editor', component: EditorComponent},
  { path: 'navigation', component: NavigationComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'liked', component: LikedblogsComponent},
  { path: 'unread', component: UnreadblogsComponent},
  { path: 'editprofile', component: EditprofileComponent},
  { path: 'private', component: PrivateComponent},
  { path: 'public', component: PublicComponent},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
