import { Injectable } from '@angular/core';
import { AuthService } from './website/service/auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    if (!this.authService.isLoggedIn()) {
      return this.router.navigateByUrl('/login').then(() => false);
    }
    return true;
  }
}
