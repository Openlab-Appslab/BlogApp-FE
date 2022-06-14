import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
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
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './auth.guard';
import { LatestblogComponent } from './UI/latestblog/latestblog.component';
import { BlogsComponent } from './UI/blogs/blogs.component';

const routes: Routes = [
  { path: '', component: MainblogComponent},
  { path: 'mainblog', component: MainblogComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'blogs/:id', component: BlogDetailComponent },
  { path: 'ui/profile/editor', canActivate: [AuthGuard], component: EditorComponent},
  { path: 'ui/profile/navigation', canActivate: [AuthGuard], component: NavigationComponent},
  { path: 'ui/profile',  canActivate: [AuthGuard], component: ProfileComponent},
  { path: 'ui/profile/liked', canActivate: [AuthGuard], component: LikedblogsComponent},
  { path: 'ui/profile/unread',  canActivate: [AuthGuard], component: UnreadblogsComponent},
  { path: 'ui/profile/editprofile',  canActivate: [AuthGuard], component: EditprofileComponent},
  { path: 'ui/profile/private',  canActivate: [AuthGuard], component: PrivateComponent},
  { path: 'ui/profile/public',  canActivate: [AuthGuard], component: PublicComponent},
  { path: 'ui/profile/blogs', canActivate: [AuthGuard], component: LatestblogComponent},
  { path: 'ui/profile/blogstmp', canActivate: [AuthGuard], component: BlogsComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
