import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../services/auth/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  
  token:string = "";

  constructor(private userAuthService: UserAuthService,
    private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.token = this.userAuthService.getToken(); 
    console.log(this.token);
    if(this.token !== ""){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
  
}
