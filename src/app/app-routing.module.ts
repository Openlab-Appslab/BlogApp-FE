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
  { path: '', redirectTo: 'mainblog', pathMatch: 'full'},

  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RoleGuardGuard],
    children: [
      { path: 'home', component: HomeAdminComponent},
      { path: 'users', component: UsersPageComponent},
      { path: 'admins', component: AdminsComponent},
      { path: 'blogs', component: BlogsAdminComponent},
      { path: 'newsletter', component: NewsletterComponent}

    ]
  },

  {
    path: '', 
    component: WebsiteComponent,
    children: [
      { path: 'mainblog', component: MainblogComponent},
      { path: 'contact', component: ContactComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'blog/:id', component: BlogDetailComponent },
      { path: 'ui/profile/editor', canActivate: [AuthGuard], component: EditorComponent},
      { path: 'ui/profile/navigation', canActivate: [AuthGuard], component: NavigationComponent},
      { path: 'ui/profile',  canActivate: [AuthGuard], component: ProfileComponent},
      { path: 'ui/profile/liked', canActivate: [AuthGuard], component: LikedblogsComponent},
      { path: 'ui/profile/unread',  canActivate: [AuthGuard], component: UnreadblogsComponent},
      { path: 'ui/profile/editprofile',  canActivate: [AuthGuard], component: EditprofileComponent},
      { path: 'ui/profile/private',  canActivate: [AuthGuard], component: PrivateComponent},
      { path: 'ui/profile/public',  canActivate: [AuthGuard], component: PublicComponent},
      { path: 'ui/profile/blogs', canActivate: [AuthGuard], component: LatestblogComponent},
      { path: 'ui/profile/blogstmp', canActivate: [AuthGuard], component: BlogsComponent},
    ]

  },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
  
];
  

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule,]
})
export class AppRoutingModule {}
