import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ContactComponent } from './website/contact/contact.component';
import { MainblogComponent } from './website/mainblog/mainblog.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { EditorComponent } from './website/UI/editor/editor.component';
import { NavigationComponent } from './website/UI/navigation/navigation.component';
import { ProfileComponent } from './website/UI/profile/profile.component';
import { EditprofileComponent } from './website/UI/editprofile/editprofile.component';
import { UnreadblogsComponent} from './website/UI/unreadblogs/unreadblogs.component';
import { LikedblogsComponent } from './website/UI/likedblogs/likedblogs.component';
import { PublicComponent } from './website/UI/public/public.component';
import { PrivateComponent } from './website/UI/private/private.component';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './website/service/auth.service';
import { AuthGuard } from './auth.guard';
import { LatestblogComponent } from './website/UI/latestblog/latestblog.component';
import { BlogsComponent } from './website/UI/blogs/blogs.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminComponent } from './admin/admin.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { WebsiteComponent } from './website/website.component';
import { UsersPageComponent } from './admin/users-page/users-page.component';
import { RoleGuardGuard } from './role-guard.guard';
import { AdminsComponent } from './admin/admins/admins.component';
import { BlogsAdminComponent } from './admin/blogs-admin/blogs-admin.component';
import { NewsletterComponent } from './admin/newsletter/newsletter.component';

const routes: Routes = [
  { path: '', component: MainblogComponent},
  { path: 'mainblog', component: MainblogComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'blogs/:id', component: BlogDetailComponent },
  { path: 'ui/profile/editor', component: EditorComponent},
  { path: 'ui/profile/navigation', component: NavigationComponent},
  { path: 'ui/profile', component: ProfileComponent},
  { path: 'ui/profile/liked', component: LikedblogsComponent},
  { path: 'ui/profile/unread', component: UnreadblogsComponent},
  { path: 'ui/profile/editprofile', component: EditprofileComponent},
  { path: 'ui/profile/private', component: PrivateComponent},
  { path: 'ui/profile/public', component: PublicComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule,]
})
export class AppRoutingModule {}
